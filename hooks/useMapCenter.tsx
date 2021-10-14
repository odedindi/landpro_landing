import * as React from 'react';
import L from 'leaflet';
export const useMapCenter = () => {
	const [mapCenter, setMapCenter] = React.useState<L.Map>(undefined!);

	return { mapCenter, setMapCenter };
};
