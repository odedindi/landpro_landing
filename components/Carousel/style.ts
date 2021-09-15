import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const CarouselContainer = styled.div`
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
`;

export const Title = styled.h6`
	text-align: center;
	margin: 2rem 0;
`;

export const CarouselWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 80rem;
`;

export const CardsWrapper = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
`;

export const Card = styled.div`
	width: calc(30% - 2rem);
	margin: 1rem;
	cursor: pointer;

	${device.desktop} {
		width: calc(33.333333% - 2rem);
	}
	${device.tablet} {
		width: calc(50% - 2rem);
	}
	${device.phone} {
		width: 100%;
		margin: 0 0 2rem 0;
	}

	.container {
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		-webkit-perspective: 1000px;
		perspective: 1000px;
	}

	.front,
	.back {
		background-size: cover;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		background-position: center;
		-webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
			-webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		text-align: center;
		min-height: 280px;
		height: auto;
		border-radius: 10px;
		color: #fff;
		font-size: 1.5rem;
	}

	.back {
		background: #cedce7;
		background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
	}

	.front:after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		opacity: 0.6;
		background-color: #000;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		border-radius: 10px;
	}
	.container:hover .front,
	.container:hover .back {
		-webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
			-webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
	}

	.back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.inner {
		-webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
		transform: translateY(-50%) translateZ(60px) scale(0.94);
		top: 50%;
		position: absolute;
		left: 0;
		width: 100%;
		padding: 2rem;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		outline: 1px solid transparent;
		-webkit-perspective: inherit;
		perspective: inherit;
		z-index: 2;
	}

	.container .back {
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.container .front {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.container:hover .back {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.container:hover .front {
		-webkit-transform: rotateY(-180deg);
		transform: rotateY(-180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.front .inner span {
		color: rgba(255, 255, 255, 0.7);
		font-family: 'Montserrat';
		font-weight: 300;
	}
`;
