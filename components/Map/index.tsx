// ======================= React & Next =======================
import * as React from 'react';
import dynamic from 'next/dynamic';
// ========================== styles ==========================
import * as S from './style';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-geosearch/dist/geosearch.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
// =========================== GIS ============================
import { MapContainer } from 'react-leaflet';
import L, { CRS, LatLngExpression } from 'leaflet';
// ======================== components ========================
import MapConfig from './Config';
const SubPolygon = dynamic(() => import('./SubPolygon'));
// ============================================================

type MapProps = {
	startLocation: LatLngExpression;
	zoom: Zoom;
	setMapCenter: React.Dispatch<React.SetStateAction<L.Map>>;
	subPolygonShowList: SubPolygonOnShowList[];
};

const Map = ({
	startLocation,
	zoom,
	setMapCenter,
	subPolygonShowList,
}: MapProps) => (
	<S.MapWrapper>
		<MapContainer
			id="map"
			center={startLocation}
			zoom={zoom}
			crs={CRS.EPSG3857}
			whenCreated={setMapCenter}
			scrollWheelZoom={false}
			layers={[]}>
			<MapConfig />
			{subPolygonShowList.length &&
				subPolygonShowList.map((subPolygon) => (
					<SubPolygon key={subPolygon.id} subPolygon={subPolygon} />
				))}
		</MapContainer>
	</S.MapWrapper>
);

export default Map;
