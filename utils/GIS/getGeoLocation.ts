const getGeoLocation = () => {
	let status: LeafletGeolocation | string;

	const success = (position: { coords: GeoLocation }) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		status = { lat: latitude, lng: longitude };
		return status;
	};

	const error = () => {
		status = 'Unable to retrieve your location';
		return status;
	};

	if (!navigator.geolocation) {
		status = 'Geolocation is not supported by your browser';
		return status;
	} else {
		navigator.geolocation.getCurrentPosition(success, error);
	}
};

export default getGeoLocation;
