export const createGeoJSON = ({ id, latlngs }: MapMarkings) => {
	const geoJSON: NewlyCreatedGeoJSON = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {
					id: id,
				},
				geometry: {
					type: 'Polygon',
					coordinates: [latlngs.map(({ lat, lng }) => [lng, lat])],
				},
			},
		],
	};
	return geoJSON;
};
