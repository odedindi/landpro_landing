import styled, { createGlobalStyle } from 'styled-components';
import { device } from 'utils/mediaQueries';

export const LandProButton = styled.button`
	cursor: pointer;
	font-size: 1.125em;
	border: solid 0.125em transparent;
	border-radius: 20px 20px 20px 20px;
	background-color: ${({ theme }) => theme.logo};
	color: white;
	transition: ease-in-out 0.53s;
	font-weight: 700;
	height: 50px;
	:hover,
	:focus {
		color: ${({ theme }) => theme.colors.header};
		background-color: transparent;
		border: solid 0.125em transparent;
	}
`;

export const GlobalStyle = createGlobalStyle`
    body, html, a {
        font-family: 'Ubuntu', sans-serif;
    }
    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: ${({ theme }) => theme.colors.background};
        overflow-x: hidden; 
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Ubuntu', sans-serif;
        color: ${({ theme }) => theme.colors.header};
        font-size: 2.6275rem;
        line-height: 2.9625rem;
        ${device.phone} {
            font-size: 1.575rem;
        }

    }

    p {
        color: ${({ theme }) => theme.colors.paragraph};
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        color: ${({ theme }) => theme.colors.anchor};
        outline: none;
        text-decoration: none;

        :hover {
            color: ${({ theme }) => theme.colors.anchor};
        }
    }
    
    *:focus {
        outline: none;
    }
`;
