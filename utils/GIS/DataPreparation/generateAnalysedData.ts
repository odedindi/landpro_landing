import {
	prepareAnalysedDataAndMaybeAddToShowList,
	setFirstLatThenLngArray,
} from '.';

import { calcArea } from '../calcArea';

const generateAnalysedData = (fetchedData: NewGeoJSONResponse) => {
	const parsedData: AnalysedFeatureCollection = JSON.parse(
		fetchedData.data as unknown as string,
	);
	// console.log("parsedData: ", parsedData)
	const mapPolygonLayerData =
		prepareAnalysedDataAndMaybeAddToShowList(fetchedData);
	return {
		type: parsedData.type,
		subPolygons: [
			parsedData.features.map((feature: AnalysedFeature, index: number) => {
				let subPolygonCoordinates = setFirstLatThenLngArray(
					feature.geometry.coordinates[0],
				);
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

export default generateAnalysedData;
