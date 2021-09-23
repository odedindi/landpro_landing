import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const Hero = styled.div`
	height: 70vh;
	padding: 0 10rem;

	${device.tablet} {
		padding: 0 5rem;
	}

	background: #cedce7;

	background-image: url(/assets/imgs/one_world.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
`;
