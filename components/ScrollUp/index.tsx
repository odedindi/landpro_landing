import Image from 'next/image';
import * as S from './style';

const ScrollUp = () => {
	const scrollHandler = () => {
		const element = document.getElementById('navBar');
		element!.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<S.ScrollWrapper onClick={scrollHandler}>
			<Image
				src="/assets/imgs/svg/scroll-top.svg"
				alt="scroll-top"
				width="2rem"
				height="2rem"
			/>
		</S.ScrollWrapper>
	);
};

export default ScrollUp;
