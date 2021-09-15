import styled from 'styled-components';
import { LandProButton } from 'styles/global';

export const Button = styled(LandProButton)`
	background: ${({ theme }) => theme.landproSlogen.pro};
	color: ${({ theme }) => theme.landproSlogen.span};
	border: solid 0.125em ${({ theme }) => theme.landproSlogen.pro};
	margin-top: 0.625rem;
	width: 100%;
	max-width: 180px;
`;
