import styled, { keyframes } from 'styled-components';

export const PhotoCredit = styled.p`
	font-size: 0.75rem;
	margin-bottom: 2rem;
	color: darkgray;
	a {
		color: gray;
	}
`;

const slidein = keyframes`
    from {
        -webkit-transform:translate3d(0,-100%,0);
        opacity:0;
        transform:translate3d(0,-100%,0);
    }
	
    to {
        -webkit-transform:none;
        opacity:1;
        transform:none;
    }
`;
export const Hero = styled.div`
	min-height: 45rem;
	background: url('/assets/imgs/oneWorld.jpg') center center no-repeat;
	background-size: cover;
	-moz-animation: ${slidein} 3s 1;
	-ms-animation: ${slidein} 3s 1;
	-o-animation: ${slidein} 3s 1;
	-webkit-animation: ${slidein} 3s 1;
	animation: ${slidein} 3s 1;
`;
