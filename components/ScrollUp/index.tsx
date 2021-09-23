import * as React from 'react';
import { scrollIcon } from './scrollIcon';

import * as S from './style';
const ScrollUp = ({ disable }: { disable: boolean }) => {
	const scrollHandler = () => {
		const element = document.getElementById('navBar');
		element!.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<S.ScrollWrapper disable={disable} onClick={scrollHandler}>
			{scrollIcon}
		</S.ScrollWrapper>
	);
};

export default ScrollUp;
