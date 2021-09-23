import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const Card = styled.div`
	width: 24rem;
	height: 23rem;
	margin: 0.75rem;
	border-radius: 0.5rem;
	display: inline-block;
	background-size: cover;
	position: relative;
	cursor: pointer;
	transition: all 0.4s ease-out;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
	overflow: hidden;

	${device.phone} {
		height: 25rem;
	}

	.withAnimation {
		opacity: 0;
		transition: all 0.6s ease-in-out;
	}
	:hover {
		background: #cedce7;
		background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);

		transform: scale(1.1);
	}
	:hover img {
		opacity: 0.2;
	}
	:hover .withAnimation {
		transform: translateX(0);
		opacity: 1;
	}

	.imgCredit {
		position: absolute;
		bottom: -4.5rem;
		left: 0.5rem;

		display: block;
		opacity: 0;
		transition: transform 0.4s ease-out, opacity 0.5s ease;
	}
	:hover .imgCredit {
		opacity: 1;
	}
`;

export const CardImage = styled.img`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	transition: all 0.4s ease-out;
	object-fit: cover;
`;

export const CardContentWrapper = styled.div`
	position: absolute;
	padding: 30px;
	height: calc(100% - 3.75rem);
`;
export const CardTitle = styled.h2`
	text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
	font-weight: 100;
	margin: 0.2rem 0 0 2rem;
	font-style: italic;
	transform: translateX(200px);
`;
export const CardText = styled.p`
	font-weight: 300;
	padding: 1rem 0 0 0;
	line-height: 25px;
	transform: translateX(-200px);
	transition-delay: 0.2s;
`;
