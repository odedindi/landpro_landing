import styled from 'styled-components';

export const MiddleBlock = styled.section`
	padding: 0.5rem 0 0;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 768px) {
		padding: 2.725rem 0 3rem;
	}
`;

export const Content = styled.p`
	/* padding: 0.75rem 0 0.75rem; */
`;

export const ContentWrapper = styled.div`
	padding: 0;

	@media only screen and (max-width: 768px) {
		max-width: 100%;
	}
`;
export const ChildrenWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	justify-content: center;
`;
