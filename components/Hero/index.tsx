// ======================= React & Next =======================
import * as React from 'react';
// =========================== hooks ==========================
import useScreenSize from 'use-screen-size';
import { useWordCloud } from 'hooks/useWordCloud';
// ========================== styles ==========================
import * as S from './style';
import { PhotoCredit } from 'styles/global';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ======================== words list ========================
import { wordsList } from 'utils/wordsList';
// ============================================================

const LandProHero = () => {
	const { t } = useTranslation('common');
	const { WordCloud } = useWordCloud(wordsList);
	const { width } = useScreenSize();
	const [showHero, setShowHero] = React.useState(true);

	React.useEffect(() => {
		if (width < 480) return setShowHero(false);
		setShowHero(true);
	}, [width]);

	if (!showHero) return null;

	return (
		<>
			<S.Hero>
				<WordCloud />
			</S.Hero>
			<PhotoCredit>
				{t('copyRights.Photo by')}
				<a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Markus Spiske
				</a>
			</PhotoCredit>
		</>
	);
};

export default React.memo(LandProHero);
