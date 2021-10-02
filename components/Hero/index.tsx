// ======================= React & Next =======================
import * as React from 'react';
// =========================== hooks ==========================
import useScreenSize from 'use-screen-size';
// ========================== styles ==========================
import * as S from './style';
// ============================================================
import Earth from './Earth';

import Stars from './Stars';

const LandProHero = () => {
	const heroRef = React.useRef<HTMLDivElement>(null);

	const { width } = useScreenSize();
	const [showHero, setShowHero] = React.useState(true);
	React.useEffect(() => {
		if (width < 480) return setShowHero(false);
		setShowHero(true);
	}, [width]);

	if (!showHero) return null;
	return (
		<>
			<S.Hero ref={heroRef}>
				<Stars heroRef={heroRef} />
				<Earth />
			</S.Hero>
		</>
	);
};

export default React.memo(LandProHero);
