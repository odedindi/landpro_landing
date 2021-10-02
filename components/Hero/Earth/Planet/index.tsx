import * as THREE from 'three';
import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import planetVertexShader from './planetVertex.glsl';
import planetFragmentShader from './planetFragment.glsl';
import useMousePosition from 'hooks/useMousePosition';

export const Planet = (props: JSX.IntrinsicElements['mesh']) => {
	const mousePosition = useMousePosition();

	const planetRef = React.useRef<THREE.Mesh>(null!);
	// Set up state for the hovered and active state
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

	const day = React.useMemo(() => {
		const imgUrl = 'assets/textures/earth.jpg';
		const textureLoader = new THREE.TextureLoader();
		return {
			globeTexture: {
				type: 't',
				value: textureLoader.load(imgUrl),
			},
		};
	}, []);

	return (
		<mesh
			{...props}
			ref={planetRef}
			onClick={(_event) => setActive(!active)}
			onPointerOver={(_event) => setHover(true)}
			onPointerOut={(_event) => setHover(false)}>
			<sphereGeometry args={[5, 50, 50]} />
			<shaderMaterial
				attach="material"
				vertexShader={planetVertexShader}
				fragmentShader={planetFragmentShader}
				uniforms={day}
			/>
			{/* <meshBasicMaterial
        attach="material"
        map={useTexture(active ? "imgs/earth.jpg" : "imgs/earthNight.png")}
      /> */}
		</mesh>
	);
};

export default Planet;
