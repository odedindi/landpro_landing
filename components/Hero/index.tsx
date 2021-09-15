// ======================= React & Next =======================
import * as React from 'react';
// =========================== hooks ==========================
import useScreenSize from 'use-screen-size';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ========================== styles ==========================
import * as S from './style';
// ======================= translations =======================

const LandProHero = () => {
	const { t } = useTranslation('common');
	const { width } = useScreenSize();
	const [showHero, setShowHero] = React.useState(true);
	React.useEffect(() => {
		if (width < 480) return setShowHero(false);
		setShowHero(true);
	}, [width]);

	if (!showHero) return null;

	return (
		<>
			<S.Hero />
			<S.PhotoCredit>
				*{t('hero.photo')}{' '}
				<a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Markus Spiske
				</a>{' '}
				{t('hero.on')}{' '}
				<a href="https://unsplash.com/s/photos/climate-change?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Unsplash
				</a>
			</S.PhotoCredit>
		</>
	);
};

export default React.memo(LandProHero);
