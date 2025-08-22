import { useControls } from "leva";
import { MeshTransmissionMaterial } from "@react-three/drei";

import WaterBottle from "./components/Waterbottle";
import Environment from "./Environment";
import Cat from "./components/Cat";

export default function Experience() {
	// Plastic bottle
	const {
		bottlePositionX,
		bottlePositionY,
		bottlePositionZ,
		bottleRotationX,
		bottleRotationY,
		bottleRotationZ,
		bottleScale,
	} = useControls(
		"water bottle",
		{
			bottlePositionX: { value: 3.9, min: -10, max: 10, step: 0.01 },
			bottlePositionY: { value: 5.13, min: -10, max: 10, step: 0.01 },
			bottlePositionZ: { value: -0.4, min: -10, max: 10, step: 0.01 },
			bottleScale: { value: 0.7, min: 0.2, max: 5, step: 0.1 },
			bottleRotationX: { value: 0, min: -5, max: 5, step: 0.01 },
			bottleRotationY: { value: 0, min: -5, max: 5, step: 0.01 },
			bottleRotationZ: { value: 0, min: -5, max: 5, step: 0.01 },
		},
		{ collapsed: true }
	);

	// Cat
	const {
		catPositionX,
		catPositionY,
		catPositionZ,
		catRotationX,
		catRotationY,
		catRotationZ,
		catScale,
	} = useControls(
		"cat",
		{
			catPositionX: { value: 5.5, min: -10, max: 10, step: 0.01 },
			catPositionY: { value: 5.04, min: -10, max: 10, step: 0.01 },
			catPositionZ: { value: 0.22, min: -10, max: 10, step: 0.01 },
			catRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			catRotationY: { value: -1.8, min: -10, max: 10, step: 0.01 },
			catRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			catScale: { value: 0.7, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);

	// Tank
	const {
		tankPositionX,
		tankPositionY,
		tankPositionZ,
		tankRotationX,
		tankRotationY,
		tankRotationZ,
		tankScaleX,
		tankScaleY,
		tankScaleZ,
	} = useControls(
		"tank scale",
		{
			tankPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			tankPositionY: { value: 1.81, min: -10, max: 10, step: 0.01 },
			tankPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			tankRotationX: { value: 0, min: -5, max: 5, step: 0.01 },
			tankRotationY: { value: 0.6, min: -5, max: 5, step: 0.01 },
			tankRotationZ: { value: 0, min: -5, max: 5, step: 0.01 },
			tankScaleX: { value: 5, min: 0.5, max: 15, step: 0.01 },
			tankScaleY: { value: 5, min: 0.5, max: 15, step: 0.01 },
			tankScaleZ: { value: 3, min: 0.5, max: 15, step: 0.01 },
		},
		{ collapsed: true }
	);

	// Glass material controls
	const {
		transmission,
		thickness,
		roughness,
		chromaticAbberation,
		ior,
		backside,
	} = useControls(
		"glass material",
		{
			transmission: { value: 1, min: 0, max: 1, step: 0.01 },
			thickness: { value: 0.2, min: 0, max: 5, step: 0.01 },
			roughness: { value: 0, min: 0, max: 1, step: 0.01 },
			chromaticAberration: { value: 0.03, min: 0, max: 1, step: 0.01 },
			ior: { value: 1.5, min: 1, max: 2.3, step: 0.01 },
			backside: { value: true },
		},
		{ collapsed: true }
	);
	return (
		<>
			{/** Cat */}
			<Cat
				position={[catPositionX, catPositionY, catPositionZ]}
				rotation={[catRotationX, catRotationY, catRotationZ]}
				scale={catScale}
			/>
			{/** Environment with all the water stuff */}
			<Environment />
			{/** Water bottle */}
			<WaterBottle
				position={[bottlePositionX, bottlePositionY, bottlePositionZ]}
				rotation={[bottleRotationX, bottleRotationY, bottleRotationZ]}
				scale={bottleScale}
			/>
			{/** Tank  */}
			<mesh
				position={[tankPositionX, tankPositionY, tankPositionZ]}
				rotation={[tankRotationX, tankRotationY, tankRotationZ]}
				castShadow>
				<boxGeometry args={[tankScaleX, tankScaleY, tankScaleZ]} />
				<MeshTransmissionMaterial
					transmission={transmission}
					thickness={thickness}
					roughness={roughness}
					chromaticAbberation={chromaticAbberation}
					ior={ior}
					backside={backside}
					color='#ffffff'
				/>
			</mesh>
			{/** Floor */}
			<mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
				<planeGeometry args={[20, 20]} />
				<meshStandardMaterial color='rebeccapurple' />
			</mesh>
		</>
	);
}
