import styled from 'styled-components';
import { device } from 'styles/mediaQueries';

export const MiddleBlock = styled.section`
	padding: 0.5rem 0 0;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 2rem;
	${device.tablet} {
		padding: 2.725rem 0 3rem;
	}
`;

export const Content = styled.p`
	padding: 0.75rem;
`;

export const ContentWrapper = styled.div`
	padding: 0;

	@media only screen and (max-width: 768px) {
		max-width: 100%;
	}
`;
