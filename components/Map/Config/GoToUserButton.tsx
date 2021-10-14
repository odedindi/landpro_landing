// ======================== react =========================
import * as React from 'react';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ========================= GIS ==========================
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-easybutton/src/easy-button.css';
// ========================== utils ===========================
import { flyTo } from 'utils/GIS';
// ============================================================

const GoToUserButton = () => {
	const { t } = useTranslation('carbonMap');
	const map = useMap();

	const clickHandler = React.useCallback(
		() => flyTo(map, { to: 'user' }),
		[map],
	);

	const gpsSymbole = `<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 25 25" width="15"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>`;
	const [firstRender, setFirstRender] = React.useState(true);
	React.useEffect(() => {
		if (!firstRender) return;
		const gpsButton = L.easyButton({
			position: 'topright',
			leafletClasses: true,
			states: [
				{
					stateName: 'center',
					onClick: clickHandler,
					title: `${t('buttons.toUser')}`,
					icon: gpsSymbole,
				},
			],
		});
		gpsButton.addTo(map);
		setFirstRender(false);
	}, [clickHandler, firstRender, gpsSymbole, map, t]);

	return null;
};

export default GoToUserButton;
