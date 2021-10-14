import { returnLandCoverColor, setFirstLatThenLngArray } from '.';
import { calcArea } from '../';

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
		).features.map((feature: AnalysedFeature) => {
			const latlngCoor = setFirstLatThenLngArray(
				feature.geometry.coordinates[0],
			);
			return {
				area: {
					m2: Number(
						calcArea(latlngCoor).toLocaleString('en-US', {
							maximumFractionDigits: 2,
						}),
					),
					ha: Number(
						(calcArea(latlngCoor) / 10000).toLocaleString('en-US', {
							maximumFractionDigits: 6,
						}),
					),
				},
				color: returnLandCoverColor(feature.properties.land_cover),
				coordinates: flipTheCoor(feature.geometry.coordinates[0]),
				geometry: {
					type: feature.geometry.type,
					coordinates: feature.geometry.coordinates,
				},
				id: `${fetchedData.id}/${feature.id}`,
				landCover: feature.properties.land_cover,
				polygonName: feature.properties.land_cover,
				soil_co_estimates: feature.properties.soil_co_estimates,
				veg_co_estimates: feature.properties.veg_co_estimates,
			};
		});
		if (setState) {
			console.log('setState was called', typeof setState);
			setState(subPolygonOnShowList);
		}
		return subPolygonOnShowList;
	};

export default prepareAnalysedDataAndMaybeAddToShowList;
