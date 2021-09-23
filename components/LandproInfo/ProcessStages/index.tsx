// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import * as S from './style';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ======================== components ========================
import Card from 'components/Card';
// ============================================================

const ProcessStages = () => {
	const { t } = useTranslation('common');

	type LandProStage = {
		imgSrc: string;
		title: string;
		text: string;
	};
	const stages: LandProStage[] = [
		{
			imgSrc: '/assets/imgs/landProBase/Landpro1.png',
			title: 'firstTitle',
			text: 'firstText',
		},
		{
			imgSrc: '/assets/imgs/landProBase/Landpro2.png',
			title: 'secondTitle',
			text: 'secondText',
		},
		{
			imgSrc: '/assets/imgs/landProBase/Landpro3.png',
			title: 'thirdTitle',
			text: 'thirdText',
		},
	];
	return (
		<S.ProcessStagesWrapper>
			<S.ProcessStagesCardsWrapper>
				{stages.map((stage, index) => (
					<Card
						key={index}
						type="flipOver"
						imgSrc={stage.imgSrc}
						text={t(`how.stages.${stage.text}`)}
						title={t(`how.stages.${stage.title}`)}
					/>
				))}
			</S.ProcessStagesCardsWrapper>
		</S.ProcessStagesWrapper>
	);
};

export default ProcessStages;
