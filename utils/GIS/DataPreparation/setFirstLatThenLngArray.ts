const setFirstLatThenLngArray = (arr: Array<number[]>): GeoLocation[] =>
	arr.map((coor) => ({
		latitude: coor[1],
		longitude: coor[0],
	}));
export default setFirstLatThenLngArray;
