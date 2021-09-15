// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import * as S from './style';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ============================================================

const LandProCarousel = () => {
	const { t } = useTranslation('common');

	type Stage = {
		imgSrc: string;
		title: string;
		text: string;
	};
	const stages: Stage[] = [
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
		<S.CarouselContainer>
			<S.CarouselWrapper>
				<S.Title>{t('how.title')}</S.Title>
				<S.CardsWrapper>
					{stages.map((stage, index) => (
						<S.Card key={index}>
							<div className="container">
								<div
									className="front"
									style={{
										backgroundImage: `url(${stage.imgSrc})`,
									}}>
									<div className="inner">
										<span>{t(`how.stages.${stage.title}`)}</span>
									</div>
								</div>
								<div className="back">
									<div className="inner">
										<p>{t(`how.stages.${stage.text}`)}</p>
									</div>
								</div>
							</div>
						</S.Card>
					))}
				</S.CardsWrapper>
			</S.CarouselWrapper>
		</S.CarouselContainer>
	);
};

export default LandProCarousel;
