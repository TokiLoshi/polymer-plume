import Coral from "./components/Coral";
import Figgy from "./components/Figgy";
import MandarinFish from "./components/MandarinFish";
import HousePlant from "./components/Plant";

import { useControls } from "leva";
import Shelf from "./components/Shelf";
import Shell from "./components/Shell";
import StarFish from "./components/StarFish";

export default function Environment() {
	// Coral
	const {
		coralPositionX,
		coralPositionY,
		coralPositionZ,
		coralRotationX,
		coralRotationY,
		coralRotationZ,
		coralScale,
	} = useControls(
		"tank",
		{
			coralPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			coralPositionY: { value: 1, min: -10, max: 10, step: 0.01 },
			coralPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			coralRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			coralRotationY: { value: 1, min: -10, max: 10, step: 0.01 },
			coralRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			coralScale: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);

	// Figgy
	const {
		figgyPositionX,
		figgyPositionY,
		figgyPositionZ,
		figgyRotationX,
		figgyRotationY,
		figgyRotationZ,
		figgyScale,
	} = useControls(
		"figgy",
		{
			figgyPositionX: { value: -5.7, min: -10, max: 10, step: 0.01 },
			figgyPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			figgyPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			figgyRotationX: { value: -5.7, min: -10, max: 10, step: 0.01 },
			figgyRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			figgyRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			figgyScale: { value: 1, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);

	// Fishy
	const {
		fishPositionX,
		fishPositionY,
		fishPositionZ,
		fishRotationX,
		fishRotationY,
		fishRotationZ,
		fishScale,
	} = useControls(
		"fish",
		{
			fishPositionX: { value: 2, min: -10, max: 10, step: 0.01 },
			fishPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			fishPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			fishRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			fishRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			fishRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			fishScale: { value: 1, min: -5, max: 5, step: 0.01 },
		},
		{ collapsed: true }
	);

	// House plant
	const {
		plantPositionX,
		plantPositionY,
		plantPositionZ,
		plantRotationX,
		plantRotationY,
		plantRotationZ,
		plantScale,
	} = useControls(
		"plant",
		{
			plantPositionX: { value: 2, min: -10, max: 10, step: 0.01 },
			plantPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			plantPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			plantRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			plantRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			plantRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			plantScale: { value: 1, min: -5, max: 5, step: 0.01 },
		},
		{ collapsed: true }
	);

	// Shelf
	const {
		shelfPositionX,
		shelfPositionY,
		shelfPositionZ,
		shelfRotationX,
		shelfRotationY,
		shelfRotationZ,
		shelfScale,
	} = useControls(
		"shelf",
		{
			shelfPositionX: { value: 2, min: -10, max: 10, step: 0.01 },
			shelfPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			shelfPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			shelfRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			shelfRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			shelfRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			shelfScale: { value: 1, min: -5, max: 5, step: 0.01 },
		},
		{ collapsed: true }
	);

	// Shell
	const {
		shellPositionX,
		shellPositionY,
		shellPositionZ,
		shellRotationX,
		shellRotationY,
		shellRotationZ,
		shellScale,
	} = useControls(
		"shell",
		{
			shellPositionX: { value: 2, min: -10, max: 10, step: 0.01 },
			shellPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			shellPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			shellRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			shellRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			shellRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			shellScale: { value: 1, min: -5, max: 5, step: 0.01 },
		},
		{ collapsed: true }
	);

	// Starfish
	const {
		starFishPositionX,
		starFishPositionY,
		starFishPositionZ,
		starFishRotationX,
		starFishRotationY,
		starFishRotationZ,
		starFishScale,
	} = useControls(
		"starFish",
		{
			starFishPositionX: { value: 2, min: -10, max: 10, step: 0.01 },
			starFishPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			starFishPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			starFishRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			starFishRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			starFishRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			starFishScale: { value: 1, min: -5, max: 5, step: 0.01 },
		},
		{ collapsed: true }
	);

	return (
		<>
			{/** Coral */}
			<Coral
				position={[coralPositionX, coralPositionY, coralPositionZ]}
				rotation={[coralRotationX, coralRotationY, coralRotationZ]}
				scale={coralScale}
			/>
			{/** Figgy */}
			<Figgy
				position={[figgyPositionX, figgyPositionY, figgyPositionZ]}
				rotation={[figgyRotationX, figgyRotationY, figgyRotationZ]}
				scale={figgyScale}
			/>
			{/** House Plant */}
			<HousePlant
				position={[plantPositionX, plantPositionY, plantPositionZ]}
				rotation={[plantRotationX, plantRotationY, plantRotationZ]}
				scale={plantScale}
			/>
			{/** Fish */}
			<MandarinFish
				position={[fishPositionX, fishPositionY, fishPositionZ]}
				rotation={[fishRotationX, fishRotationY, fishRotationZ]}
				scale={fishScale}
			/>

			{/** Shelf */}
			<Shelf
				position={[shelfPositionX, shelfPositionY, shelfPositionZ]}
				rotation={[shelfRotationX, shelfRotationY, shelfRotationZ]}
				scale={shelfScale}
			/>
			{/** Shell */}
			<Shell
				position={[shellPositionX, shellPositionY, shellPositionZ]}
				rotation={[shellRotationX, shellRotationY, shellRotationZ]}
				scale={shellScale}
			/>
			{/** Starfish */}
			<StarFish
				position={[starFishPositionX, starFishPositionY, starFishPositionZ]}
				rotation={[starFishRotationX, starFishRotationY, starFishRotationZ]}
				scale={starFishScale}
			/>
		</>
	);
}
