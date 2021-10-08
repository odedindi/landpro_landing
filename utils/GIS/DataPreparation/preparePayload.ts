import { generateAnalysedData, setFirstLatThenLngArray } from '.';
import { calcArea } from '../calcArea';

const preparePayload = (fetchedData: NewGeoJSONResponse) => {
	console.log('fetchedData arriving to preparePayload: ', fetchedData);

	let originalPolygonCoordinates = setFirstLatThenLngArray(
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
		analysis: generateAnalysedData(fetchedData),
	};
	console.log('preparePayload: ', payload);
	return payload;
};

export default preparePayload;
