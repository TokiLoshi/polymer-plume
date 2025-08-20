import Coral from "./components/Coral";
import Figgy from "./components/Figgy";
import MandarinFish from "./components/MandarinFish";

import { useControls } from "leva";

export default function Environment() {
	const { coralPositionX, coralPositionY, coralPositionZ } = useControls(
		"tank",
		{
			coralPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			coralPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			coralPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);

	const { figgyPositionX, figgyPositionY, figgyPositionZ } = useControls(
		"figgy",
		{
			figgyPositionX: { value: -5.7, min: -10, max: 10, step: 0.01 },
			figgyPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			figgyPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	const { fishPositionX, fishPositionY, fishPositionZ } = useControls(
		"fish",
		{
			fishPositionX: { value: 2, min: -10, max: 10, step: 0.01 },
			fishPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			fishPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	return (
		<>
			{/** Coral */}
			<Coral position={[coralPositionX, coralPositionY, coralPositionZ]} />
			{/** Figgy */}
			<Figgy position={[figgyPositionX, figgyPositionY, figgyPositionZ]} />
			{/** House Plant */}
			{/** Plant */}
			{/** Fish */}
			<MandarinFish position={[fishPositionX, fishPositionY, fishPositionZ]} />
			{/** Shell */}
			{/** Starfish */}
		</>
	);
}
