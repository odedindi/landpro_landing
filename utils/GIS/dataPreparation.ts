import { calcArea } from './calcArea';

export const datePrettier = (date: string) =>
	date.split('T')[0].split('-').reverse().join('/');

export const colorByVegCO2Estimation = (vegCO2Value: number) => {
	if (vegCO2Value > 8) return 'darkgreen';
	if (vegCO2Value > 5) return 'lightgreen';
	if (vegCO2Value > 3) return 'orange';
	if (vegCO2Value > 0) return 'red';
	if (vegCO2Value === 0) return 'gray';
};

type PrepareResponseDataAndAddToShowList = (
	fetchedData: PostNewGeoJSONResponse,
	setState?: (arg0: any[]) => void,
) => SubPolygonOnShowList[];
export const prepareResponseDataAndAddToShowList: PrepareResponseDataAndAddToShowList =
	(fetchedData, setState) => {
		const flipTheCoor = (coordinates: Coordinates[]) =>
			coordinates.map((pair) => [pair[1], pair[0]]);

		const subPolygonOnShowList: SubPolygonOnShowList[] = JSON.parse(
			fetchedData.data as unknown as string,
		).features.map((feature: AnalyzedFeature) => ({
			id: `${fetchedData.id}/${feature.id}`,
			polygonName: feature.properties.land_cover,
			landCover: colorByVegCO2Estimation(
				feature.properties.veg_co_estimates as number,
			),
			coordinates: flipTheCoor(feature.geometry.coordinates[0]),
			soil_co_estimates: feature.properties.soil_co_estimates,
			veg_co_estimates: feature.properties.veg_co_estimates,
			geometry: {
				type: feature.geometry.type,
				coordinates: feature.geometry.coordinates,
			},
			area: {
				m2: Number(
					calcArea(editArray(feature.geometry.coordinates[0])).toLocaleString(
						'en-US',
						{
							maximumFractionDigits: 2,
						},
					),
				),
				ha: Number(
					(
						calcArea(editArray(feature.geometry.coordinates[0])) / 10000
					).toLocaleString('en-US', {
						maximumFractionDigits: 3,
					}),
				),
			},
		}));
		if (setState) {
			setState(subPolygonOnShowList);
		}
		return subPolygonOnShowList;
	};

export const editArray = (arr: Array<number[]>): GISLocation[] =>
	arr.map((coor) => ({
		latitude: coor[1],
		longitude: coor[0],
	}));

export const editAnalysisData = (fetchedData: PostNewGeoJSONResponse) => {
	const parsedData = JSON.parse(fetchedData.data as unknown as string);

	const mapPolygonLayerData = prepareResponseDataAndAddToShowList(fetchedData);
	return {
		type: parsedData.type,
		subPolygons: [
			parsedData.features.map((feature: AnalyzedFeature, index: number) => {
				let subPolygonCoordinates = editArray(feature.geometry.coordinates[0]);
				return {
					id: feature.id,
					coordinates: subPolygonCoordinates,
					area: {
						m2: calcArea(subPolygonCoordinates).toLocaleString('en-US', {
							maximumFractionDigits: 2,
						}),
						ha: (calcArea(subPolygonCoordinates) / 10000).toLocaleString(
							'en-US',
							{ maximumFractionDigits: 3 },
						),
					},
					land_cover: feature.properties.land_cover,
					soil_co_estimates: feature.properties.soil_co_estimates,
					veg_co_estimates: feature.properties.veg_co_estimates,
					mapSubPolygonLayerData: mapPolygonLayerData[index],
				};
			}),
		],
	};
};

export const preparePayload = (fetchedData: PostNewGeoJSONResponse) => {
	console.log('fetchedData arriving to preparePayload: ', fetchedData);

	let originalPolygonCoordinates = editArray(
		fetchedData.coordinates.features[0].geometry.coordinates[0],
	);
	const payload = {
		created: fetchedData.created,
		updated: fetchedData.updated,
		id: fetchedData.id,
		originalPolygon: {
			type: fetchedData.coordinates.features[0].geometry.type,
			coordinates: originalPolygonCoordinates,
			area: {
				m2: calcArea(originalPolygonCoordinates).toLocaleString('en-US', {
					maximumFractionDigits: 2,
				}),
				ha: (calcArea(originalPolygonCoordinates) / 10000).toLocaleString(
					'en-US',
					{
						maximumFractionDigits: 3,
					},
				),
			},
		},
		analysis: editAnalysisData(fetchedData),
	};
	console.log('preparePayload: ', payload);
	return payload;
};

/*
 An implementation based on the formula for a 
 centroid of a non-self-intersecting closed polygon
*/
export const getCentroid = (arr: GISLocation[]) => {
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
