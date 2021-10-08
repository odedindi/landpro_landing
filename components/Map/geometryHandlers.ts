import L from 'leaflet';

export const create = (
	{ layerType, layer }: { layerType: string; layer: any },
	setMapMarkings: React.Dispatch<
		React.SetStateAction<LeafletGeometryElement[]>
	>,
) => {
	if (layerType === 'polygon') {
		const { _leaflet_id }: { _leaflet_id: number } = layer;
		setMapMarkings((layers) => [
			...layers,
			{ id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
		]);
	}
};
export const edit = (
	{ layers: { _layers } }: { layers: { _layers: any } },
	setMapMarkings: React.Dispatch<
		React.SetStateAction<LeafletGeometryElement[]>
	>,
) => {
	Object.values(_layers).map(({ _leaflet_id, editing }: any) =>
		setMapMarkings((layers) =>
			layers.map((layer) =>
				layer.id === _leaflet_id
					? {
							...layer,
							latlngs: { ...editing.latlngs[0] },
					  }
					: layer,
			),
		),
	);
};
export const del = (
	{ layers: { _layers } }: { layers: { _layers: any } },
	setMapMarkings: React.Dispatch<
		React.SetStateAction<LeafletGeometryElement[]>
	>,
) => {
	Object.values(_layers).map(({ _leaflet_id }: any) =>
		setMapMarkings((layers) =>
			layers.filter((layer: { id: number }) => layer.id !== _leaflet_id),
		),
	);
};
