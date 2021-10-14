export const getGeoLocation = (): Coordinates | string | undefined => {
	let status: Coordinates | string;

	const success = (position: { coords: GeoLocation }): Coordinates => {
		const { latitude, longitude } = position.coords;
		status = [latitude, longitude] as Coordinates;
		return status;
	};

	const error = (): string => {
		status = 'Unable to retrieve location';
		return status;
	};

	if (!navigator.geolocation) {
		let status = 'Geolocation is not supported';
		return status;
	}

	navigator.geolocation.getCurrentPosition(success, error);
};

export default getGeoLocation;
