export default function Experience() {
	return (
		<>
			<mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
				<planeGeometry args={[20, 20]} />
				<meshStandardMaterial color='rebeccapurple' />
			</mesh>
		</>
	);
}
