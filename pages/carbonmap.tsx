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
// ========================== actions =========================
import * as PolygonActions from 'context/polygon/actions';
// ========================== utils ===========================
import notify from 'utils/notify';
import fetcher from 'utils/fetcher';
// =========================== GIS ============================
import * as P from 'utils/GIS/dataPreparation';
import { flyTo } from 'utils/GIS/flyTo';
import { createGeoJSON } from 'utils/GIS/DataPreparation/prepareToPost';
// ========================== icons ===========================
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import BubbleChartRoundedIcon from '@material-ui/icons/BubbleChartRounded';
// ======================== components ========================
import { Well, Title } from '@zendeskgarden/react-notifications';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Stepper } from '@zendeskgarden/react-accordions';
import { Button } from '@zendeskgarden/react-buttons';
const Map = dynamic(() => import('components/Map'), { ssr: false });
// ============================================================

const CarbonMap: NextPage = () => {
	const { t } = useTranslation('carbonMap');

	// map settings
	const [zoom] = React.useState<Zoom>(12);
	const [startGeoLocation] = React.useState<GeoLocation>([47.0227, 8.303]);
	const [mapCenter, setMapCenter] = useMapCenter();

	// user marked poylgons
	const { polygonState, polygonDispatch } = usePolygonStore();

	const [mapMarkings, setMapMarkings] = React.useState<MapMarkings[]>([]);
	const [canSubmit, setCanSubmit] = React.useState(false);
	React.useEffect(() => {
		mapMarkings.length > 0 ? setCanSubmit(true) : setCanSubmit(false);
	}, [mapMarkings]);

	// response multipolygon data to show on the map
	const [responseCoordinates, setResponseCoordinates] =
		React.useState<SubPolygonType>([]);
	React.useEffect(() => {
		setResponseCoordinates(polygonState!.subPolygonsToShow);
	}, [polygonState]);

	const SubmitButton = () => {
		const handleSubmit = () => {
			const serverUrl = 'https://landpro.ch/api/polygons/new/';
			notify('loading', 'Processing request...');
			mapMarkings.map(async (marking) => {
				const geoJSON = createGeoJSON(marking);

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

					if (polygonDispatch) {
						notify('success', 'Data analysed successfully');
						polygonDispatch(
							PolygonActions.addData(
								P.preparePayload(
									response.parsedBody as unknown as NewGeoJSONResponse,
								),
							),
						);
						setMapMarkings([]);
					}
				} catch (response) {
					notify('error', 'Error: Data was not sent!');
					console.log('Error', response);
				}
			});
		};

		return (
			<Button disabled={!canSubmit ? true : false} onClick={handleSubmit}>
				Submit
			</Button>
		);
	};

	const [currentStep, setStep] = React.useState(1);
	const onNext = () => setStep(currentStep + 1);
	const onBack = () => setStep(currentStep - 1);

	const steps = [
		{
			id: 1,
			icon: <MapRoundedIcon fontSize="inherit" />,
			label: 'Carbon Map',
			content: `Please start by selectin an area.`,
			buttons: <Button onClick={onNext}>Next</Button>,
		},
		{
			id: 2,
			icon: <BorderColorRoundedIcon fontSize="inherit" />,
			label: 'Area Selection',
			content: `Please mark a polygon on the map and when ready press on the submit button`,
			buttons: (
				<>
					<Button onClick={onBack}>Back</Button>
					<Button onClick={() => flyTo(mapCenter as L.Map, { to: 'user' })}>
						to user
					</Button>
					<Button onClick={() => setCanSubmit(!canSubmit)}>
						change can submit
					</Button>
					<SubmitButton />
					<Button onClick={onNext}>Next</Button>
				</>
			),
		},
		{
			id: 3,
			icon: <BubbleChartRoundedIcon fontSize="inherit" />,
			label: 'Data recieved',
			content: 'vegetation contains: [x]CO/ton, soil contains: [y]CO/ton.',
			buttons: <Button onClick={onBack}>Back</Button>,
		},
	];

	return (
		<Well isFloating>
			<Row justifyContent="center">
				<Col sm={10} textAlign="center">
					<Title>
						<Stepper activeIndex={currentStep - 1} isHorizontal>
							{steps.map((step) => (
								<Stepper.Step key={step.id}>
									<Stepper.Label icon={step.icon}>{step.label}</Stepper.Label>
								</Stepper.Step>
							))}
						</Stepper>
					</Title>
					{steps.map(
						(step) =>
							step.id === currentStep && (
								<div
									className="container"
									key={step.id}
									style={{ margin: '1rem 0 0 0' }}>
									{step.content}
									<div
										className="button"
										style={{ marginTop: '1rem', padding: '1rem' }}>
										{step.buttons}
									</div>
								</div>
							),
					)}
				</Col>
			</Row>
			<div style={{ width: '100%', background: 'gray', height: '70vh' }}>
				<Map
					startGeoLocation={startGeoLocation}
					zoom={zoom}
					setMapCenter={
						setMapCenter as React.Dispatch<React.SetStateAction<L.Map>>
					}
					setMapMarkings={setMapMarkings}
					responseCoordinates={responseCoordinates}
				/>
			</div>
		</Well>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'nav',
			'contactForm',
			'carbonMap',
			'footer',
		])),
	},
});

export default CarbonMap;
