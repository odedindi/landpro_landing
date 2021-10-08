// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import * as S from './style';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-geosearch/dist/geosearch.css';
// ========================= GIS ==========================
import {
	FeatureGroup,
	GeoJSON,
	LayersControl,
	MapContainer,
	Tooltip,
} from 'react-leaflet';
import L, { CRS, LatLngExpression } from 'leaflet';
import { EditControl } from 'react-leaflet-draw';
import Tiles from './Tiles';
import { GeoJsonObject } from 'geojson';

// =================== geometry handlers ===================
import * as Handle from './geometryHandlers';
// ====================== components ======================
import MapConfig from './Config';
// import TooltipTable from './subpolygonTooltipTable';
// ========================================================

type MapProps = {
	startGeoLocation: LatLngExpression;
	zoom: Zoom;
	setMapCenter: React.Dispatch<React.SetStateAction<L.Map>>;
	setMapMarkings: React.Dispatch<
		React.SetStateAction<LeafletGeometryElement[]>
	>;
	responseCoordinates: any;
};

const Map = ({
	startGeoLocation,
	zoom,
	setMapCenter,
	setMapMarkings,
	responseCoordinates,
}: MapProps) => (
	<S.MapWrapper>
		<MapContainer
			id="map"
			center={startGeoLocation}
			zoom={zoom}
			crs={CRS.EPSG3857}
			whenCreated={setMapCenter}
			scrollWheelZoom={false}
			layers={[]}>
			<MapConfig />
			<FeatureGroup>
				<EditControl
					position="topright"
					onCreated={(event: any) => Handle.create(event, setMapMarkings)}
					onEdited={(event: any) => Handle.edit(event, setMapMarkings)}
					onDeleted={(event: any) => Handle.del(event, setMapMarkings)}
					draw={{
						rectangle: false,
						polyline: false,
						circle: false,
						circlemarker: false,
						marker: false,
					}}
				/>
			</FeatureGroup>
			<LayersControl position="topleft">
				<Tiles />
			</LayersControl>
			{responseCoordinates.length &&
				responseCoordinates.map(
					(feature: {
						id: React.Key | null | undefined;
						geometry: GeoJsonObject;
						landCover: any;
					}) => (
						<GeoJSON
							key={feature.id}
							data={feature.geometry}
							pathOptions={{
								color: feature.landCover,
								fillOpacity: 0.578,
							}}>
							<Tooltip sticky>
								{/* <TooltipTable feature={feature} /> */}
							</Tooltip>
						</GeoJSON>
					),
				)}
		</MapContainer>
	</S.MapWrapper>
);
export default Map;
