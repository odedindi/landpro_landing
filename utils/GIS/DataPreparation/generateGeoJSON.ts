type GenerateGeoJSON = (
	gemetricalElement: LeafletGeometryElement,
	elementType?: string,
) => NewlyCreatedGeoJSON;

const generateGeoJSON: GenerateGeoJSON = (
	{ id, latlngs },
	elementType = 'Polygon',
) => {
	const geoJSON: NewlyCreatedGeoJSON = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {
					id: id,
				},
				geometry: {
					type: elementType,
					coordinates: [latlngs.map(({ lat, lng }) => [lng, lat])],
				},
			},
		],
	};
	return geoJSON;
};

export default generateGeoJSON;
