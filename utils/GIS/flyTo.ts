import L from 'leaflet';
import notify from 'utils/notify';

// go to user location
export const flyTo = (mapCenter: L.Map, where: { to: string; at?: any }) => {
	const success = (position: { coords: GeoLocation }) => {
		const { latitude, longitude } = position.coords;
		notify('success', '');
		return mapCenter.flyTo([latitude, longitude], 16);
	};

	const error = (): string => {
		return notify('error', `Error: 'Unable to retrieve location'`);
	};

	if (where.to === 'user') {
		if (!navigator.geolocation) {
			return notify('error', `Error: Geolocation is not supported`);
		}
		navigator.geolocation.getCurrentPosition(success, error);
	}
	if (where.to === 'polygon') {
		return mapCenter.flyTo(where.at, 13);
	}
};

export default flyTo;

// notify('success', 'Data analysed successfully');
// notify('error', `Error(${response}): Data was not sent!`);
