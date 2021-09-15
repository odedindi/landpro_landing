import styled, { css } from 'styled-components';
import { device } from 'utils/mediaQueries';

const root = {
	blue: '#0e0620',
	white: '#fff',
	green: '#2ccf6d',
};
export const Body = styled.div`
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Nunito Sans';
	color: ${root.blue};
	font-size: 1em;

	${device.tablet} {
		display: block;
	}
`;

export const Container = styled.div`
	margin-top: 5rem;
	${device.tablet} {
		margin-bottom: 5rem;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-flow: row;
	${device.phone} {
		flex-flow: row wrap;
	}
`;

export const Col = styled.div`
	align-self: center;
	justify-self: center;
	display: flex;
	flex-direction: column;
	padding-left: 15px;
	padding-right: 15px;

	${device.tablet} {
		max-width: 720px;
	}
`;

export const SVG = styled.svg`
	width: 100%;
	visibility: hidden;
`;
export const H1 = styled.h1`
	font-size: 7.5em;
	margin: 15px 0px;
	font-weight: bold;
`;
export const H2 = styled.h2`
	font-weight: bold;
`;

const Button = styled.button`
	overflow: hidden;
	background: transparent;
	position: relative;
	padding: 8px 50px;
	border-radius: 30px;
	margin: 5px 0px;
	z-index: 1;
	font-size: 1em;
	letter-spacing: 2px;
	font-weight: bold;
	transition: 0.75s ease-in-out;
	cursor: pointer;
`;
export const GreenButton = styled(Button)`
	border: 4px solid ${root.green};
	text-transform: uppercase;
	color: ${root.green};
	&:hover {
		color: ${root.blue};
		border: 4px solid ${root.blue};
		&:before {
			width: 100%;
		}
	}
`;

export const Moon = styled.div`
	overflow: hidden;
	position: absolute;
	left: 3.5rem;
	top: -2.5em;
	margin-left: -15em;
	width: 20em;
	height: 20em;
	background: #ddd;
	border-radius: 50%;

	font-size: 62.5%;
	box-shadow: inset -1.6em 0 0 0 #ccc, 0 0 1em 0 #ccc;

	& .crater {
		position: absolute;
	}

	& .crater:nth-child(1) {
		left: 3.15em;
		top: 9em;
		width: 7.15em;
		height: 7.8em;
		border-radius: 50%;
		background: #999;
		box-shadow: inset 0.5em 0 0.1em 0 #777, -0.1em 0 0 0.1px #eee,
			0.4em 0 0.2em 0 #ccc;
	}

	& .crater:nth-child(2) {
		left: 12.2em;
		top: 14.5em;
		width: 4em;
		height: 2.8em;
		border-radius: 50%;
		background: #999;
		box-shadow: inset 0.2em 0.1em 0.2em 0 #777, -0.1em -0.1em 0 0.1em #eee,
			0.2em 0.1em 0.2em 0 #ccc;
		${css`
			transform: rotate(-22deg);
		`};
	}

	& .crater:nth-child(3) {
		left: 14.4em;
		top: 7em;
		width: 2em;
		height: 3em;
		border-radius: 50%;
		background: #999;
		box-shadow: inset 0.2em 0 0.1em 0 #777, -0.1em 0 0 0.1em #eee;
		${css`
			transform: rotate(12deg);
		`};
	}

	& .crater:nth-child(4) {
		left: 14.4em;
		top: 17.1em;
		width: 0.8em;
		height: 3em;
		border-radius: 50%;

		${css`
			transform: rotate(58deg);
		`};
		box-shadow: inset 0.4em 0.1em 0 0 #ccc, inset -0.1em 0.1em 0 0 #ccc;
		background: #999;
	}

	& .crater:nth-child(5) {
		left: 19.14em;
		top: 5.6em;
		width: 0.8em;
		height: 3.6em;
		border-radius: 50%;

		${css`
			transform: rotate(-17deg);
		`};

		box-shadow: inset 0.4em 0.1em 0 0 #ccc, inset -0.1em 0.1em 0 0 #ccc;
		background: #999;
	}

	.flag {
		position: absolute;
		background: #bb0000;
		padding: 0.2em 0.3em;
		line-height: 1.2em;
		color: #eee;
		border-radius: 1.1em;
		left: 5em;
		white-space: nowrap;
		cursor: default;

		${css`
			transform: rotate(-32deg);
		`};

		&:before {
			content: '';
			position: absolute;
			width: 0.2em;
			height: 2.7em;
			left: -0.1em;
			top: 0;
			background: #444;
		}
	}

	.rover {
		position: absolute;

		left: 12.3em;
		top: 5.38em;
		${css`
			transform: rotate(160deg);
		`};

		.body {
			position: absolute;
			z-index: 99;
			width: 0.9em;
			height: 1.5em;
			border-radius: 0.3em;
			background: #fff;
			box-shadow: -0.1em 0 0 0 #ccc;

			&:after {
				content: '';
				position: absolute;
				top: 0.4em;
				left: 0.3em;
				width: 0.5em;
				height: 0.7em;
				box-shadow: -0.2em -0.1em 0 0 #ccc;
			}
		}

		.wheels {
			position: absolute;
			left: -0.3em;

			&:after,
			&:before {
				content: '';
				position: absolute;
				z-index: 9;
				background: #111;
				width: 1.4em;
				height: 0.6em;
				border-radius: 0.2em;
			}

			&:after {
				top: 0.9em;
			}

			&:before {
				top: 0;
			}
		}

		.trace {
			position: absolute;
			left: -0.6em;
			top: 1.5em;

			${css`
				transform: rotate(-24deg);
			`};

			&:before,
			&:after {
				content: '';
				position: absolute;
				width: 1.2em;
				height: 5em;
				border-radius: 50%;
				box-shadow: inset 0.2em 0.3em 0 0 #bebebe;
			}

			&:after {
				left: 0;
			}

			&:before {
				left: 1em;
			}
		}
	}
`;
