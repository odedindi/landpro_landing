// ======================== react =========================
import * as React from 'react';
// ======================== styles ========================
import 'leaflet-geosearch/dist/geosearch.css';
// ========================= GIS ==========================
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// ========================================================

const GeoSearchSettings = () => {
	const map = useMap();

	const markerIcon = L.icon({
		iconSize: [25, 41],
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
		iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
		shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
	});

	const searchControl = GeoSearchControl({
		provider: new OpenStreetMapProvider(),
		autoComplete: true,
		autoCompleteDelay: 350,
		// style: 'bar', // default is button
		maxSuggestions: 5,
		marker: {
			markerIcon,
		},
	});

	React.useEffect(() => {
		map.addControl(searchControl);
		return () => {
			map.removeControl(searchControl);
		};
	}, [map, searchControl]);

	return null;
};

export default GeoSearchSettings;
