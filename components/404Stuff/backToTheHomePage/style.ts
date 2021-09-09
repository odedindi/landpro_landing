import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const Body = styled.body`
	background-color: #000000;
`;

export const NotFound = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 5%;
	height: 100vh;

	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Press Start 2P';
	color: #ffffff;
	text-align: center;

	h1 {
		color: red;
		font-size: 8rem;
	}
	h2 {
		font-size: 3.25rem;
	}

	h1,
	h2,
	h3 {
		margin-bottom: 2rem;
	}
	${device.desktop} {
		flex-direction: column;
		justify-content: space-around;

		div.img img {
			width: 40vw;
			height: auto;
		}
		h1 {
			font-size: 50px;
		}
		h2 {
			font-size: 25px;
		}
	}
`;

export const Text = styled.div`
	height: 60vh;
	a {
		text-decoration: none;
		margin-right: 20px;
		:hover {
			color: red;
			text-decoration: underline;
		}
	}

	${device.desktop} {
		a:active {
			color: red;
			text-decoration: underline;
		}
	}
`;
