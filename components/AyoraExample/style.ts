import styled from 'styled-components';

export const CardsWrapper = styled.section`
	height: 100%;
	width: 100%;
	margin: 0.75rem;
	border-radius: 0.5rem;

	transition: all 0.4s ease-in-out;
	/* box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.5); */
	overflow: hidden;
`;

export const CardImage = styled.img`
	height: 350px;
	object-fit: cover;
	box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.5);
`;
