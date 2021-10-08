import { setFirstLatThenLngArray } from '.';
import { calcArea } from '../calcArea';

type ReturnLandCoverColor<T> = (variable: T) => string;

export const returnLandCoverColor: ReturnLandCoverColor<number> = (
	variable,
) => {
	if (variable > 8) return 'darkgreen';
	if (variable > 5) return 'lightgreen';
	if (variable > 3) return 'orange';
	if (variable > 0) return 'red';
	return 'gray';
};

type PrepareAnalysedDataAndMaybeAddToShowList = (
	fetchedData: NewGeoJSONResponse,
	setState?: (arg0: any[]) => void,
) => SubPolygonOnShowList[];

const prepareAnalysedDataAndMaybeAddToShowList: PrepareAnalysedDataAndMaybeAddToShowList =
	(fetchedData, setState) => {
		const flipTheCoor = (coordinatesArray: Coordinates[]) =>
			coordinatesArray.map((coordinates) => {
				return [coordinates[1], coordinates[0]];
			});

		const subPolygonOnShowList: SubPolygonOnShowList[] = JSON.parse(
			fetchedData.data as unknown as string,
		).features.map((feature: AnalyzedFeature) => ({
			id: `${fetchedData.id}/${feature.id}`,
			polygonName: feature.properties.land_cover,
			landCover: returnLandCoverColor(
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
					calcArea(
						setFirstLatThenLngArray(feature.geometry.coordinates[0]),
					).toLocaleString('en-US', {
						maximumFractionDigits: 2,
					}),
				),
				ha: Number(
					(
						calcArea(setFirstLatThenLngArray(feature.geometry.coordinates[0])) /
						10000
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

export default prepareAnalysedDataAndMaybeAddToShowList;
