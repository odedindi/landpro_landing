import GeometryHandlers from './GeometryHandlers';
import GeoSearchSettings from './GeoSearch';
import GoToUserButton from './GoToUserButton';
import RefreshMap from './RefreshMap';
import { ScaleControl } from 'react-leaflet';
import Tiles from './Tiles';
import Watermark from './Watermark';

const MapConfig = () => (
	<>
		<GoToUserButton />
		<GeometryHandlers />
		<GeoSearchSettings />
		<RefreshMap />
		<ScaleControl />
		<Tiles />
		<Watermark />
	</>
);
export default MapConfig;
