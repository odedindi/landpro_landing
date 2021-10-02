// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import * as S from './style';
// ============================================================
import gsap from 'gsap';
import { v4 as uuid } from 'uuid';

type StarsProps = {
	heroRef: React.RefObject<HTMLDivElement>;
};

const Stars = ({ heroRef }: StarsProps) => {
	const selector = gsap.utils.selector(heroRef);
	const timeline = React.useRef<gsap.core.Timeline>();

	const stars = React.useMemo(
		() => [...Array(250)].map(() => `star-${uuid()}`),
		[],
	);
	const randomInRange = (max: number, min: number): number =>
		Math.floor(Math.random() * (max - min)) + min;

	const getRandomStarColor = () => {
		const rand = Math.random();
		if (rand < 0.2) return 'crimson';
		if (rand < 0.5) return 'deepskyblue';
		return 'floralwhite';
	};
	React.useEffect(() => {
		timeline.current = gsap
			.timeline()
			.delay(0.5)
			.fromTo(
				selector('#stars'),
				{ opacity: 0 },
				{ duration: 0.25, opacity: 1 },
			);
		stars.forEach((star) => {
			return (timeline.current = gsap
				.timeline({ repeat: -1 })
				.to(selector(`#${star}`), {
					opacity: 0.2,
					yoyo: true,
					repeat: 2,
					repeatDelay: randomInRange(2, 25),
				}));
		});
	}, [selector, stars]);

	return (
		<S.Stars id="stars">
			{stars.map((star) => (
				<S.Star
					key={star}
					id={star}
					style={{
						background: getRandomStarColor(),
						opacity: Math.random(),
						height: `${randomInRange(1, 3)}px`,
						width: `${randomInRange(1, 3)}px`,
						top: `${randomInRange(0, 100)}%`,
						left: `${randomInRange(0, 100)}%`,
					}}
				/>
			))}
		</S.Stars>
	);
};

export default Stars;
