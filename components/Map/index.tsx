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
import { CRS } from 'leaflet';
import { EditControl } from 'react-leaflet-draw';
import Tiles from './Tiles';
import * as GIS from 'utils/GIS';
import { GeoJsonObject } from 'geojson';
// ====================== components ======================
// import TooltipTable from './subpolygonTooltipTable';
// ========================================================

type MapProps = {
	startGeoLocation: GeoLocation;
	zoom: Zoom;
	setMapCenter: React.Dispatch<React.SetStateAction<L.Map>>;
	setMapMarkings: React.Dispatch<React.SetStateAction<MapMarkings[]>>;
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
			<GIS.MapLoadSearchSettings />
			<FeatureGroup>
				<EditControl
					position="topright"
					onCreated={(event: { layerType: any; layer: any }) =>
						GIS.onCreateHandler(event, setMapMarkings)
					}
					onEdited={(event: { layers: { _layers: any } }) =>
						GIS.onEditHandler(event, setMapMarkings)
					}
					onDeleted={(event: { layers: { _layers: any } }) =>
						GIS.onDeleteHandler(event, setMapMarkings)
					}
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
