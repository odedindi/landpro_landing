// ======================= React & Next =======================
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
// ========================== styles ==========================
import * as S from 'styles/pages';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ========================== hooks ===========================
import { useMapCenter } from 'hooks/useMapCenter';
import { usePolygonStore } from 'hooks/usePolygonStore';
import { useDidMount } from 'hooks/useDidMount';
// ========================== actions =========================
import * as PolygonActions from 'context/polygon/actions';
// ========================== utils ===========================
import notify from 'utils/notify';
import fetcher from 'utils/fetcher';
// =========================== GIS ============================
import { generateGeoJSON, preparePayload } from 'utils/GIS/DataPreparation';
// =========================== types ==========================
import { LatLngExpression } from 'leaflet';
// ======================== components ========================
import { Well } from '@zendeskgarden/react-notifications';

import { Button } from '@zendeskgarden/react-buttons';
import PlotsTable from 'components/DataTables/PlotsTable';
import DemoInstructions from 'components/DemoInstructions';
const Map = dynamic(() => import('components/Map'), { ssr: false });
// ============================================================

const CarbonMap: NextPage = () => {
	const didMount = useDidMount();
	const { t } = useTranslation('carbonMap');

	// map settings
	const [zoom] = React.useState<Zoom>(12);
	const [startGeoLocation] = React.useState<LatLngExpression>([47.0227, 8.303]);
	const { mapCenter, setMapCenter } = useMapCenter();

	// map & user poylgons store
	const {
		mapGeometry: { mapMarkings },
		userGeometry: { polygonState },
	} = usePolygonStore();

	// response multipolygon data to show on the map
	const [subPolygonShowList, setSubPolygonShowList] = React.useState<
		SubPolygonOnShowList[]
	>([]);
	React.useEffect(() => {
		setSubPolygonShowList(polygonState.subPolygonsToShow);
	}, [polygonState.subPolygonsToShow]);

	React.useEffect(() => {
		if (process.env.NODE_ENV === 'development')
			console.log('polygonState: ', polygonState);
	}, [polygonState]);

	const [canSubmit, setCanSubmit] = React.useState(false);
	React.useEffect(() => {
		mapMarkings.length > 0 ? setCanSubmit(true) : setCanSubmit(false);
	}, [mapMarkings.length]);

	const SubmitButton = () => {
		const {
			userGeometry: { polygonDispatch },
			mapGeometry: { mapMarkings, setMapMarkings },
		} = usePolygonStore();
		const handleSubmit = () => {
			const serverUrl = 'https://landpro.ch/api/polygons/new/';
			notify('loading', 'Processing request...');
			mapMarkings.map(async (marking) => {
				const geoJSON = generateGeoJSON(marking);

				const config: RequestInit = {
					method: 'POST',
					headers: new Headers({
						'Content-Type': 'application/json',
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					}),
					body: JSON.stringify({ geoJSON }),
				};

				try {
					const response = await fetcher<HttpResponse<NewGeoJSONResponse>>(
						serverUrl,
						config,
					);

					notify('success', 'Data analysed successfully');
					polygonDispatch(
						PolygonActions.addData(
							preparePayload(
								response.parsedBody as unknown as NewGeoJSONResponse,
							),
						),
					);
					setMapMarkings([]);
				} catch (response) {
					notify('error', `Error(${response}): Data was not sent!`);
				}
			});
		};

		return (
			<Button disabled={!canSubmit ? true : false} onClick={handleSubmit}>
				Submit
			</Button>
		);
	};

	if (!didMount) return null;
	return (
		<Well isFloating>
			<DemoInstructions mapCenter={mapCenter} />
			<Map
				startGeoLocation={startGeoLocation}
				zoom={zoom}
				setMapCenter={setMapCenter}
				subPolygonShowList={subPolygonShowList}
			/>
			<PlotsTable />
		</Well>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'nav',
			'contactForm',
			'demoInstructions',
			'carbonMap',
			'footer',
		])),
	},
});

export default CarbonMap;
