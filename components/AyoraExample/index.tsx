// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import * as S from './style';
// ======================== components ========================
import AliceCarousel from 'react-alice-carousel';
// ============================================================
const ayoraExamples: AyoraExample[] = [
	{ id: 'june13', image: '1june13' },
	{ id: 'july13', image: '2july13' },
	{ id: 'august13', image: '3august13' },
	{ id: 'november13', image: '4november13' },
	{ id: 'march14', image: '5march14' },
	{ id: 'april14', image: '6april14' },
	{ id: 'may14', image: '7may14' },
	{ id: 'june14', image: '8june14' },
];
const items = ayoraExamples.map((example) => (
	<S.CardImage
		key={example.id}
		alt={example.id}
		src={`/assets/imgs/ayora/${example.image}.png`}
	/>
));

const AyoraExample: React.FC = () => (
	<S.CardsWrapper>
		<AliceCarousel
			autoPlayInterval={3000}
			autoPlay={true}
			disableDotsControls
			disableButtonsControls
			disableSlideInfo={false}
			infinite
			animationDuration={1500}
			items={items}
		/>
	</S.CardsWrapper>
);

export default React.memo(AyoraExample);
