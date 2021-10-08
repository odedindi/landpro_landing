/*
 An implementation based on the formula for a 
 centroid of a non-self-intersecting closed polygon
*/
export const getCentroid = (arr: GeoLocation[]) => {
	let data = arr.map((coor) => [coor.latitude, coor.longitude]);
	let twoTimesSignedArea = 0;
	let cxTimes6SignedArea = 0;
	let cyTimes6SignedArea = 0;

	const length = data.length;

	const x = (index: number) => data[index % length][0];
	const y = (index: number) => data[index % length][1];

	for (let i = 0; i < data.length; i++) {
		let twoSA = x(i) * y(i + 1) - x(i + 1) * y(i);
		twoTimesSignedArea += twoSA;
		cxTimes6SignedArea += (x(i) + x(i + 1)) * twoSA;
		cyTimes6SignedArea += (y(i) + y(i + 1)) * twoSA;
	}
	let sixSignedArea = 3 * twoTimesSignedArea;
	return [
		cxTimes6SignedArea / sixSignedArea,
		cyTimes6SignedArea / sixSignedArea,
	];
};
