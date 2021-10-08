export const onCreateHandler = (
	event: { layerType: any; layer: any },
	setMapMarkings: (arg0: (layers: any) => any[]) => void,
) => {
	const { layerType, layer } = event;
	if (layerType === 'polygon') {
		const { _leaflet_id } = layer;
		setMapMarkings((layers: any) => [
			...layers,
			{ id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
		]);
	}
};
export const onEditHandler = (
	event: { layers: { _layers: any } },
	setMapMarkings: (arg0: (layers: any) => any) => unknown,
) => {
	const {
		layers: { _layers },
	} = event;
	Object.values(_layers).map(({ _leaflet_id, editing }: any) =>
		setMapMarkings((layers: any[]) =>
			layers.map((layer: { id: any }) =>
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
export const onDeleteHandler = (
	event: { layers: { _layers: any } },
	setMapMarkings: (arg0: (layers: any) => any) => unknown,
) => {
	const {
		layers: { _layers },
	} = event;
	Object.values(_layers).map(({ _leaflet_id }: any) =>
		setMapMarkings((layers: any[]) =>
			layers.filter((layer: { id: any }) => layer.id !== _leaflet_id),
		),
	);
};
