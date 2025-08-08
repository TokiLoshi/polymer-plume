import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { Loader, OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";
import { Leva } from "leva";
import * as THREE from "three";
import Experience from "./Experience";

function App() {
	return (
		<>
			<Canvas
				shadows
				camera={{
					fov: 45,
					position: [5, 3, 8],
				}}
				style={{
					background:
						"linear-gradient( 180deg, #0b0b13ff 0%, #2b417fff 15%, #4077bbff 20%, #86719eff 55%, #7c2d12 100%",
				}}
				gl={{
					tonemapping: ACESFilmicToneMapping,
					antialias: true,
				}}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[10, 10, 5]} intensity={1} castShadow />
				<directionalLight
					position={[-5, 5, -5]}
					intensity={0.4}
					color='#c9d08bff'
				/>
				<OrbitControls
					enablePan={true}
					enableZoom={true}
					enableRotate={true}
					minDistance={2}
					maxDistance={20}
					maxPolarAngle={Math.PI / 2 - 0.1}
					minPolarAngle={1}
				/>
				<Suspense fallback={null}>
					<Experience />
				</Suspense>
			</Canvas>
			<Leva collapsed />
			<Stats />
		</>
	);
}

export default App;
