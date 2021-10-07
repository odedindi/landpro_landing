import L from 'leaflet';

// go to user location
export const flyTo = (mapCenter: L.Map, where: { to: string; at?: any }) => {
	if (where.to === 'user') {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			return mapCenter.flyTo([latitude, longitude], 16);
		});
	}
	if (where.to === 'polygon') {
		return mapCenter.flyTo(where.at, 13);
	}
};
