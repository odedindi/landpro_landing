import { LayersControl, TileLayer } from 'react-leaflet';

type MapTile = {
	id: number;
	name: string;
	attribution: string;
	url: string;
};
export const mapTiles: MapTile[] = [
	{
		id: 1,
		name: 'OpenStreetMap',
		attribution:
			'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	},
	{
		id: 2,
		name: 'ESRI - World Topo Map',
		attribution:
			'&copy <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">Esri</a>',
		url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
	},
	{
		id: 3,
		name: 'ESRI - World Imagery',
		attribution:
			'&copy <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer">Esri</a>',
		url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
	},
	{
		id: 4,
		name: 'OpenTopoMap',
		attribution: '&copy <a href="https://opentopomap.org">OpenTopoMap</a>',
		url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png',
	},
	{
		id: 5,
		name: 'GoogleMaps Terrain',
		attribution:
			'&copy <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021',
		url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
	},
	{
		id: 6,
		name: 'GoogleMaps Sattelite',
		attribution:
			'&copy <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021',
		url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
	},
];

const Tiles = () => (
	<>
		{mapTiles.map((tile) =>
			tile.id === 1 ? (
				<LayersControl.BaseLayer key={tile.id} checked name={`${tile.name}`}>
					<TileLayer attribution={`${tile.attribution}`} url={`${tile.url}`} />
				</LayersControl.BaseLayer>
			) : (
				<LayersControl.BaseLayer key={tile.id} name={`${tile.name}`}>
					<TileLayer attribution={`${tile.attribution}`} url={`${tile.url}`} />
				</LayersControl.BaseLayer>
			),
		)}
	</>
);
export default Tiles;
