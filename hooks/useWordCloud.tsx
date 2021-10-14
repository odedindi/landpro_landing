// ======================= React & Next =======================
import * as React from 'react';
// ========================== three ===========================
import * as THREE from 'three';
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, TrackballControls } from '@react-three/drei';
// ============================================================

const CameraControls = () => {
	// Get a reference to the Three.js Camera, and the canvas html element.
	// We need these to setup the OrbitControls class.
	// https://threejs.org/docs/#examples/en/controls/OrbitControls
	const {
		camera,
		gl: { domElement },
	} = useThree();

	// Ref to the controls, so that we can update them on every frame using useFrame
	const controls = React.useRef<any>();
	useFrame((state) => controls.current.update());
	return (
		<>
			<OrbitControls
				ref={controls}
				args={[camera, domElement]}
				enableZoom={false}
				maxAzimuthAngle={Math.PI / 4}
				maxPolarAngle={Math.PI}
				minAzimuthAngle={-Math.PI / 4}
				minPolarAngle={0}
			/>
		</>
	);
};

const Word: React.FC<{ position: THREE.Vector3 }> = ({
	children,
	position,
}) => {
	const color = new THREE.Color();
	const fontProps = {
		fontSize: 2.5,
		letterSpacing: -0.05,
		lineHeight: 1,
		'material-toneMapped': false,
	};
	const ref = React.useRef<any>();
	const [hovered, setHovered] = React.useState(false);
	const over = (event: ThreeEvent<PointerEvent>) => (
		event.stopPropagation(), setHovered(true)
	);
	const out = () => setHovered(false);
	// Change the mouse cursor on hover
	React.useEffect(() => {
		if (hovered) document.body.style.cursor = 'pointer';
		return () => {
			document.body.style.cursor = 'auto';
		};
	}, [hovered]);
	// Tie component to the render-loop
	useFrame(({ camera }) => {
		if (ref.current) {
			// Make text face the camera
			ref.current.quaternion.copy(camera.quaternion);
			// Animate font color
			ref.current.material.color.lerp(
				color.set(hovered ? '#fa2720' : '#fec97a'),
				0.1,
			);
		}
	});
	return (
		<Text
			ref={ref}
			onPointerOver={over}
			onPointerOut={out}
			position={position}
			{...fontProps}>
			{children}
		</Text>
	);
};

const Cloud = ({ count = 4, radius = 20, wordsList = ['Land', 'Pro'] }) => {
	// Create a count x count random words with spherical distribution
	const words = React.useMemo(() => {
		const temp = [];
		const spherical = new THREE.Spherical();
		const phiSpan = Math.PI / (count + 1);
		const thetaSpan = (Math.PI * 2) / count;

		const randomWord = () =>
			wordsList[Math.floor(Math.random() * wordsList.length)];

		for (let i = 1; i < count + 1; i++)
			// Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
			for (let j = 0; j < count; j++)
				temp.push([
					new THREE.Vector3().setFromSpherical(
						spherical.set(radius, phiSpan * i, thetaSpan * j),
					),
					randomWord(),
				]);
		return temp;
	}, [count, radius, wordsList]);
	return (
		<>
			{words.map(([pos, word], index) => (
				<Word key={index} position={pos as THREE.Vector3}>
					{word}
				</Word>
			))}
		</>
	);
};
// ============================================================
export const useWordCloud = (wordsList: string[]) => {
	const WordCloud = () => (
		<Canvas dpr={[1, 2]} camera={{ position: [10, 10, 45], fov: 90 }}>
			<fog attach="fog" args={['#202025', 0, 80]} />
			<React.Suspense fallback={null}>
				<Cloud count={5} radius={28} wordsList={wordsList} />
			</React.Suspense>
			{/* <CameraControls /> */}
			<TrackballControls />
		</Canvas>
	);
	return { WordCloud };
};
export default useWordCloud;
