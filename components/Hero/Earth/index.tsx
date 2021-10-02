import * as React from 'react';
import { Canvas, Vector3 } from '@react-three/fiber';

import Planet from './Planet';
import Atmosphere from './Atmosphere';

export const Earth = () => {
	const [dpr, setDpr] = React.useState<number | undefined>();
	React.useEffect(() => {
		if (window) {
			setDpr(window.devicePixelRatio);
		}
	}, []);
	const planetScale: Vector3 = [0.3, 0.3, 0.3];
	return (
		<Canvas dpr={dpr} gl={{ antialias: true }}>
			<React.Suspense fallback={null}>
				<Planet scale={planetScale} />
				<Atmosphere
					scale={planetScale.map((scale) => scale * 1.05) as Vector3}
				/>
			</React.Suspense>
		</Canvas>
	);
};
export default Earth;
