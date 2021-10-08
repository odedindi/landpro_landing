import styled from 'styled-components';
import { device } from 'styles/mediaQueries';

export const BlockContainer = styled.section`
	position: relative;
	padding: 0 2rem;
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: space-between;

	${device.tablet} {
		padding: 3rem 0 4rem;
		flex-flow: row wrap;
		justify-content: center;

		img {
			padding: 3rem 0;
		}
	}
`;

export const ContentWrapper = styled.div`
	position: relative;
	max-width: 680px;

	${device.tablet} {
		max-width: 640px;
		padding: 4em 0;
	}
`;
export const Content = styled.p`
	margin: 1.5rem 0 2rem 0;
	${device.tablet} {
		text-align: center;
	}
`;

export const ChildrenWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: flex-start;
	max-height: 25rem;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
`;
export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 400px;
`;
