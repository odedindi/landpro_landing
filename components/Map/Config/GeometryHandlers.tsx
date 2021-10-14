// =========================== GIS ============================
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
// ========================== hooks ===========================
import { usePolygonStore } from 'hooks/usePolygonStore';

const GeometryHandlers = () => {
	const { mapGeometry } = usePolygonStore();

	const create = ({ layerType, layer }: { layerType: string; layer: any }) => {
		if (layerType === 'polygon') {
			const { _leaflet_id }: { _leaflet_id: number } = layer;
			mapGeometry.setMapMarkings((layers) => [
				...layers,
				{ id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
			]);
		}
	};
	const edit = ({ layers: { _layers } }: { layers: { _layers: any } }) => {
		Object.values(_layers).map(({ _leaflet_id, editing }: any) =>
			mapGeometry.setMapMarkings((layers) =>
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
	const del = ({ layers: { _layers } }: { layers: { _layers: any } }) => {
		Object.values(_layers).map(({ _leaflet_id }: any) =>
			mapGeometry.setMapMarkings((layers) =>
				layers.filter((layer: { id: number }) => layer.id !== _leaflet_id),
			),
		);
	};

	return (
		<FeatureGroup>
			<EditControl
				position="topright"
				onCreated={(event: any) => create(event)}
				onEdited={(event: any) => edit(event)}
				onDeleted={(event: any) => del(event)}
				draw={{
					rectangle: false,
					polyline: false,
					circle: false,
					circlemarker: false,
					marker: false,
				}}
			/>
		</FeatureGroup>
	);
};

export default GeometryHandlers;
