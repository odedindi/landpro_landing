import * as THREE from 'three';
import * as React from 'react';

import atmosphereVertexShader from './atmosphereVertex.glsl';
import atmosphereFragmentShader from './atmosphereFragment.glsl';

export const Atmosphere = (props: JSX.IntrinsicElements['mesh']) => {
	const atmosphereRef = React.useRef<THREE.Mesh>(null!);

	const uniforms = React.useMemo(
		() => ({
			color1: {
				value: new THREE.Color('red'),
			},
			color2: {
				value: new THREE.Color('green'),
			},
			topColor: { type: 'c', value: new THREE.Color(0x000000) },
			bottomColor: { type: 'c', value: new THREE.Color(0xc1987c) },
			offset: { type: 'f', value: 10 },
			exponent: { type: 'f', value: 0.25 },
		}),
		[],
	);
	return (
		<mesh {...props} ref={atmosphereRef}>
			<sphereGeometry args={[5, 50, 50]} />
			<shaderMaterial
				uniforms={uniforms}
				vertexShader={atmosphereVertexShader}
				fragmentShader={atmosphereFragmentShader}
				blending={THREE.AdditiveBlending}
				opacity={0.2}
				side={THREE.BackSide}
			/>
		</mesh>
	);
};

export default Atmosphere;
