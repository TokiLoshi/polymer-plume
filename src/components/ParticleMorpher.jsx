import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import { useThree } from "@react-three/fiber";
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";
import { useSpring, animated } from "@react-spring/three";
import { useRef } from "react";
import { useControls, button } from "leva";
import * as THREE from "three";

export default function ParticleMorpher() {
	const gltf = useGLTF("models/particles.glb");
	const { size } = useThree();
	const materialRef = useRef();
	const geometryRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [targetIndex, setTargetIndex] = useState(0);

	const { progress } = useSpring({
		progress: 1,
		from: { progress: 0 },
		reset: true,
		config: { duration: 3000 },
	});

	// const { progress } = useSpring({
	// 	from: { progress: 0 },
	// 	to: { progress: targetIndex === currentIndex ? 1 : 0 },
	// 	reset: targetIndex !== currentIndex,
	// 	config: { duration: 3000 },
	// 	onRest: () => {
	// 		if (targetIndex !== currentIndex) {
	// 			setCurrentIndex(targetIndex);
	// 		}
	// 	},
	// });

	const particleData = useMemo(() => {
		const positions = gltf.scene.children.map(
			(child) => child.geometry.attributes.position
		);

		let maxCount = 0;
		for (const position of positions) {
			if (position.count > maxCount) {
				maxCount = position.count;
			}
		}

		const processedPositions = [];
		for (const position of positions) {
			const originalArray = position.array;
			const newArray = new Float32Array(maxCount * 3);
			for (let i = 0; i < maxCount; i++) {
				const i3 = i * 3;

				if (i3 < originalArray.length) {
					newArray[i3 + 0] = originalArray[i3 + 0];
					newArray[i3 + 1] = originalArray[i3 + 1];
					newArray[i3 + 2] = originalArray[i3 + 2];
				} else {
					const randomIndex = Math.floor(position.count * Math.random()) * 3;
					newArray[i3 + 0] = originalArray[randomIndex + 0];
					newArray[i3 + 1] = originalArray[randomIndex + 1];
					newArray[i3 + 2] = originalArray[randomIndex + 2];
				}
			}
			processedPositions.push(newArray);
		}

		const sizesArray = new Float32Array(maxCount);
		for (let i = 0; i < maxCount; i++) {
			sizesArray[i] = Math.random();
		}

		return { processedPositions, maxCount, sizesArray };
	}, [gltf]);

	useEffect(() => {
		if (!geometryRef.current) return;

		geometryRef.current.attributes.position.array =
			particleData.processedPositions[targetIndex];
		geometryRef.current.attributes.position.needsUpdate = true;

		geometryRef.current.attributes.aPositionTarget.array =
			particleData.processedPositions[targetIndex];
		geometryRef.current.attributes.aPositionTarget.needsUpdate = true;
	}, [currentIndex, targetIndex, particleData]);

	const morph = (newTargetIndex) => {
		console.log(`Morphing to: ${targetIndex}, current: ${currentIndex}`);
		if (newTargetIndex === currentIndex) return;

		setTargetIndex(newTargetIndex);
	};

	// Leva controls
	useControls("ParticleMorpher", {
		"Shape 0": button(() => morph(0)),
		"Shape 1": button(() => morph(1)),
		"Shape 2": button(() => morph(2)),
		"Shape 3": button(() => morph(3)),
	});

	return (
		<>
			<points frustumCulled={false}>
				<bufferGeometry ref={geometryRef}>
					<bufferAttribute
						attach='attributes-position'
						count={particleData.maxCount}
						array={particleData.processedPositions[0]}
						itemSize={3}
					/>
					<bufferAttribute
						attach='attributes-aPositionTarget'
						count={particleData.maxCount}
						array={particleData.processedPositions[0]}
						itemSize={3}
					/>
					<bufferAttribute
						attach='attributes-aSize'
						count={particleData.maxCount}
						array={particleData.sizesArray}
						itemSize={1}
					/>
				</bufferGeometry>

				{/** Shader */}
				<animated.shaderMaterial
					ref={materialRef}
					vertexShader={vertexShader}
					fragmentShader={fragmentShader}
					uniforms={{
						uColorA: { value: [1.0, 0.45, 0.0] },
						uColorB: { value: [0.0, 0.57, 1.0] },
						uSize: { value: 0.4 },
						uResolution: {
							value: [
								size.width * window.devicePixelRatio,
								size.height * window.devicePixelRatio,
							],
						},
						uProgress: { value: progress },
					}}
					// Additive Blending
					blending={2}
					depthWrite={false}
				/>
			</points>
		</>
	);
}
