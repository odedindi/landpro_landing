import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

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
	height: 25rem;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 400px;
`;

export const MinTitle = styled.h6`
	font-size: 1rem;
	line-height: 1rem;
	padding: 0.0125rem 0;
	text-align: center;
`;

export const MinPara = styled.p`
	font-size: 0.8125rem;
	text-align: start;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 15rem;
`;
