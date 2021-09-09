import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const ScrollWrapper = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	color: rgba(0, 0, 0, 0.65);
	font-size: 14px;
	line-height: 1.5715;
	list-style: none;
	position: fixed;
	right: 100px;
	bottom: 50px;
	z-index: 10;
	width: 40px;
	height: 40px;
	cursor: pointer;

	${device.desktop} {
		display: none;
	}
`;
