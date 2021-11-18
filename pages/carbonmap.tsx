// ======================= React & Next =======================
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
// ========================== styles ==========================
// import * as S from 'styles/pages';
// ======================= translations =======================
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ========================== hooks ===========================
import { useDemoInstructions, useDidMount, usePolygonStore } from 'hooks';
// ========================== actions =========================
// import * as PolygonActions from 'context/polygon/actions';
// ========================== utils ===========================
// import notify from 'utils/notify';
// import fetcher from 'utils/fetcher';
// // =========================== GIS ============================
// import { generateGeoJSON, preparePayload } from 'utils/GIS/DataPreparation';
// =========================== types ==========================
import type { LatLngExpression } from 'leaflet';
// ======================== components ========================
import { Well } from '@zendeskgarden/react-notifications';
const PlotsTable = dynamic(() => import('components/DataTables/PlotsTable'));
const Map = dynamic(() => import('components/Map'), { ssr: false });
// ============================================================

const CarbonMap: NextPage = () => {
	const didMount = useDidMount();
	const { instructions } = useDemoInstructions();
	// const { t } = useTranslation('carbonMap');

	// map settings
	const [zoom] = React.useState<Zoom>(12);
	const [startGeoLocation] = React.useState<LatLngExpression>([47.0227, 8.303]);

	// map & user poylgons store
	const {
		userGeometry: { polygonState },
	} = usePolygonStore();

	// response multipolygon data to show on the map
	const [subPolygonShowList, setSubPolygonShowList] = React.useState<
		SubPolygonOnShowList[]
	>([]);
	React.useEffect(() => {
		const { subPolygonsToShow } = polygonState;
		setSubPolygonShowList(subPolygonsToShow);
	}, [polygonState]);

	React.useEffect(() => {
		if (process.env.NODE_ENV === 'development')
			console.log('polygonState: ', polygonState);
	}, [polygonState]);

	if (!didMount) return null;
	return (
		<Well isFloating>
			{instructions}
			<Map
				startLocation={startGeoLocation}
				zoom={zoom}
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
