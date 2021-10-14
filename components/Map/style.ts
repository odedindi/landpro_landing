import styled from 'styled-components';

export const MapWrapper = styled.div`
	height: 60vh;

	#map {
		height: 100%;
		width: 100%;
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
