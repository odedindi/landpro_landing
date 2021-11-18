import styled, { css, keyframes } from 'styled-components';

const glowAndRotate = keyframes`
0%{
	transform: scale(0.95);
	box-shadow: 0 0 0.75rem rgba(245, 92, 82, 0.8);
}
25% {
	transform: scale(1);

}
50%{
    transform: scale(1.05);
  }
  75% {
	transform: scale(1);
  }
 100% {
    transform: scale(0.95);
	box-shadow: 0 0 0.75rem rgba(245, 92, 82, 0.4);
  }
`;

const glowAndRotateMixin = css`
	animation: ${glowAndRotate} 1s linear infinite;
`;

export const MapWrapper = styled.div<{ demoStep: number }>`
	height: 60vh;

	#map {
		height: 100%;
		width: 100%;
	}

	.leaflet-draw-draw-polygon {
		${({ demoStep }) => (demoStep === 1 ? glowAndRotateMixin : '')};
	}

	// search button
	.leaflet-geosearch-button.active .leaflet-bar-part {
		border-radius: 4px;
		width: 30px;
	}
	// magnifying glass
	.leaflet-control-geosearch a.leaflet-bar-part:after {
		height: 11px;
		width: 11px;
	}
	// magnifying glass handle
	.leaflet-control-geosearch a.leaflet-bar-part:before {
		top: 19px;
		left: 17px;
	}

	// search bar height
	.leaflet-control-geosearch form {
		height: 1.86rem;
		left: 2.8rem;
	}

	.leaflet-control-geosearch form input {
		padding-top: 5px;
		font-size: 0.8rem;
	}
`;
