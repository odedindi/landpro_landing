// ======================= React & Next =======================
import * as React from 'react';
// ========================= Three.js =========================
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
// ========================== hooks ===========================
import { useMousePosition } from 'hooks';
// ============================================================

export const Planet = (props: JSX.IntrinsicElements['mesh']) => {
	const mousePosition = useMousePosition();

	const planetRef = React.useRef<THREE.Mesh>(null!);

	const [hovered, setHover] = React.useState(false);
	const [active, setActive] = React.useState(true);

	useFrame((_state, _delta) => {
		if (planetRef) {
			if (hovered) {
				planetRef.current.rotation.y += mousePosition.x / 42;
			} else {
				planetRef.current.rotation.z = -0.5;
				planetRef.current.rotation.y += 0.002;
			}
		}
	});

	const imgUrl = 'assets/textures/earth.jpg';

	return (
		<mesh
			{...props}
			ref={planetRef}
			onClick={(_event) => setActive(!active)}
			onPointerOver={(_event) => setHover(true)}
			onPointerOut={(_event) => setHover(false)}>
			<sphereGeometry args={[5, 50, 50]} />
			<meshBasicMaterial attach="material" map={useTexture(imgUrl)} />
		</mesh>
	);
};

export default Planet;
