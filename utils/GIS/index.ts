// ======================== react =========================
import { useEffect } from 'react';
// ======================== styles ========================
import 'leaflet-geosearch/dist/geosearch.css';
// ========================= GIS ==========================
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// ========================================================

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

export const MapLoadSearchSettings = () => {
	const icon = L.icon({
		iconSize: [25, 41],
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
		iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
		shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
	});
	const map = useMap();
	useEffect(() => {
		let refreshMap: ReturnType<typeof setTimeout> = setTimeout(() => {
			map.invalidateSize();
		}, 1500);

		return () => {
			clearTimeout(refreshMap);
		};
	}, [map]);
	useEffect(() => {
		const searchControl = GeoSearchControl({
			provider: new OpenStreetMapProvider(),
			autoComplete: true,
			autoCompleteDelay: 350,
			style: 'bar',
			maxSuggestions: 5,
			marker: {
				icon,
			},
		});

		map.addControl(searchControl);

		return () => {
			map.removeControl(searchControl);
		};
	}, [icon, map]);

	return null;
};

export const getGeoLocation = () => {
	let status: any;

	const success = (position: {
		coords: { latitude: number; longitude: number };
	}) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		status = { lat: latitude, lon: longitude };
		return status;
	};

	const error = () => {
		status = 'Unable to retrieve your location';
		return status;
	};

	if (!navigator.geolocation) {
		status = 'Geolocation is not supported by your browser';
		return status;
	} else {
		navigator.geolocation.getCurrentPosition(success, error);
	}
};
