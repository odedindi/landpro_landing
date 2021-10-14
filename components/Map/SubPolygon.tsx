// ======================= React & Next =======================
import * as React from 'react';
// ======================== components ========================
import { GeoJSON, Tooltip } from 'react-leaflet';
import TooltipTable from './TooptipTable';
// ========================== types ===========================
import { GeoJsonObject } from 'geojson';
// ============================================================
type SubPolygonProps = {
	subPolygon: SubPolygonOnShowList;
};
const SubPolygon = ({
	subPolygon: {
		area,
		color,
		geometry,
		id,
		landCover,
		soil_co_estimates,
		veg_co_estimates,
	},
}: SubPolygonProps) => {
	const [opacityFromSoilOrVeg, setOpacityFromSoilOrVeg] =
		React.useState('soil');

	return (
		<GeoJSON
			key={id}
			data={geometry as GeoJsonObject}
			pathOptions={{
				color: color,
				fillOpacity:
					opacityFromSoilOrVeg === 'soil'
						? soil_co_estimates / 10
						: veg_co_estimates / 10,
			}}>
			<Tooltip sticky>
				<TooltipTable
					area={area}
					id={id}
					landCover={landCover}
					soilContent={soil_co_estimates}
					vegetationContent={veg_co_estimates}
					setOpacitySource={setOpacityFromSoilOrVeg}
				/>
			</Tooltip>
		</GeoJSON>
	);
};

export default SubPolygon;
