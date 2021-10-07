import * as React from 'react';
import { Canvas, Vector3 } from '@react-three/fiber';

import Planet from './Planet';

export const Earth = () => {
	const [dpr, setDpr] = React.useState<number | undefined>();
	React.useEffect(() => {
		if (window) {
			setDpr(window.devicePixelRatio);
		}
	}, []);
	const planetScale: Vector3 = [0.2, 0.2, 0.205];
	return (
		<Canvas dpr={dpr} gl={{ antialias: true }}>
			<React.Suspense fallback={null}>
				<Planet scale={planetScale} />
			</React.Suspense>
		</Canvas>
	);
};
export default Earth;
