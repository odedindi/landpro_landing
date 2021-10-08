import styled, { css, keyframes } from 'styled-components';
import { device } from 'styles/mediaQueries';

const fadein = keyframes`
	    from { opacity: 0; }
    to { opacity: 0.7; }
`;
const fadeout = keyframes`
	    from { opacity: 0.7; }
    to { opacity: 0; }
`;

export const ScrollWrapper = styled.div<{ disable: boolean }>`
	position: fixed;
	right: 3rem;
	bottom: 1rem;
	z-index: 10;

	height: 1.25rem;
	cursor: pointer;

	animation: ${({ disable }) => (disable ? fadeout : fadein)} 1s linear 1;
	opacity: ${({ disable }) => (disable ? 0 : 0.7)};
	${device.desktop} {
		right: 1rem;
	}
`;
