const calculateAreaInSquareMeters = (
	x1: number,
	x2: number,
	y1: number,
	y2: number,
) => {
	return (y1 * x2 - x1 * y2) / 2;
};

const calculateYSegment = (
	latitudeRef: number,
	latitude: number,
	circumference: number,
) => {
	return ((latitude - latitudeRef) * circumference) / 360.0;
};

const calculateXSegment = (
	longitudeRef: number,
	longitude: number,
	latitude: number,
	circumference: number,
) => {
	return (
		((longitude - longitudeRef) *
			circumference *
			Math.cos(latitude * (Math.PI / 180))) /
		360.0
	);
};

export const calcArea = (locations: GISLocation[]) => {
	if (!locations.length) {
		return 0;
	}
	if (locations.length < 3) {
		return 0;
	}
	let radius = 6371000;

	const diameter = radius * 2;
	const circumference = diameter * Math.PI;
	const listY = [];
	const listX = [];
	const listArea = [];
	// calculate segment x and y in degrees for each point

	const latitudeRef = locations[0].latitude;
	const longitudeRef = locations[0].longitude;
	for (let i = 1; i < locations.length; i++) {
		let latitude = locations[i].latitude;
		let longitude = locations[i].longitude;
		listY.push(calculateYSegment(latitudeRef, latitude, circumference));

		listX.push(
			calculateXSegment(longitudeRef, longitude, latitude, circumference),
		);
	}

	// calculate areas for each triangle segment
	for (let i = 1; i < listX.length; i++) {
		let x1 = listX[i - 1];
		let y1 = listY[i - 1];
		let x2 = listX[i];
		let y2 = listY[i];
		listArea.push(calculateAreaInSquareMeters(x1, x2, y1, y2));
	}

	// sum areas of all triangle segments
	let areasSum = 0;
	listArea.forEach((area) => (areasSum = areasSum + area));

	// get abolute value of area, it can't be negative
	let areaCalc = Math.abs(areasSum); // Math.sqrt(areasSum * areasSum);
	return areaCalc;
};
