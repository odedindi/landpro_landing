// ======================== react =========================
import * as React from 'react';
import Image from 'next/image';
// ========================= GIS ==========================
import { useMap } from 'react-leaflet';
import L from 'leaflet';
// ========================================================

const Watermark = () => {
	const map = useMap();

	const watermark = L.Control.extend({
		onAdd: function (map: L.Map) {
			const logo = L.DomUtil.create('div');
			logo.style.display = 'flex';
			logo.style.flexDirection = 'column';
			logo.insertAdjacentHTML(
				'afterbegin',
				`<img 
                    src="/assets/logos/logo.png" 
                    alt="landpro logo"
                    width="90%" 
                    height="80%"
                />
            <p style="text-align: center;font-weight: bold;" >
                &copy;${new Date().getFullYear()}
            </p>`,
			);

			return logo;
		},
		onRemove: function (map: L.Map) {},
	});
	const [firstRender, setFirstRender] = React.useState(true);
	React.useEffect(() => {
		if (!firstRender) return;

		const addWatermark = (options: L.ControlOptions) => new watermark(options);
		addWatermark({ position: 'bottomright' }).addTo(map);
		setFirstRender(false);
	}, [firstRender, map, watermark]);
	return null;
};
export default Watermark;
