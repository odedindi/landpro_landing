import styled from 'styled-components';
import { device } from 'styles/mediaQueries';

export const PageWrapper = styled.main`
	padding: 1rem 0 5rem;
`;

export const PageNaviWrapper = styled.div`
	padding: 1rem 0.5rem;
	display: flex;
	position: relative;
	right: 2.75rem;
	width: 100vw;
`;

export const Span = styled.span`
	cursor: pointer;
`;

export const PageLink = styled.div`
	display: inline-block;
	text-align: center;
	font-size: 1rem;
	font-weight: bold;

	transition: color 0.2s ease-in;
	padding: 0.25rem 0.75rem;
`;
