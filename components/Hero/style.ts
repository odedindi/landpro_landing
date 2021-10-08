import styled from 'styled-components';
import { device } from 'styles/mediaQueries';

export const Hero = styled.div`
	height: 85vh;
	padding: 0 10rem;

	${device.tablet} {
		padding: 0 5rem;
	}

	background: radial-gradient(#000, #262626);
`;

export const Stars = styled.div`
	height: 100%;
	opacity: 0;
	position: absolute;
	width: 100%;
`;

export const Star = styled.div`
	border-radius: 100%;
	position: relative;
`;
