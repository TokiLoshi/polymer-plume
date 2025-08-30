import { useGLTF } from "@react-three/drei";
import { useMemo, useState } from "react";
import { useThree } from "@react-three/fiber";
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";

export default function ParticleMorpher() {
	const gltf = useGLTF("models/particles.glb");
	const { size } = useThree();
	const [progress, setProgress] = useState(0);

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
	return (
		<>
			<points>
				<bufferGeometry>
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
				<shaderMaterial
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
					blending={1}
					depthWrite={false}
				/>
			</points>
		</>
	);
}
