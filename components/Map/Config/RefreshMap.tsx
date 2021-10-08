// ======================== react =========================
import * as React from 'react';
// ========================= GIS ==========================
import { useMap } from 'react-leaflet';
// ========================================================

/*
    this component is for refreshing the map after 
    loading to make sure the map is rendered properly.
*/
const RefreshMap = () => {
	const map = useMap();
	React.useEffect(() => {
		let refreshMap: ReturnType<typeof setTimeout> = setTimeout(() => {
			map.invalidateSize();
		}, 1000);

		return () => {
			clearTimeout(refreshMap);
		};
	}, [map]);
	return null;
};

export default RefreshMap;
