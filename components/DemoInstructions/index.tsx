// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import * as S from './style';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ========================== hooks ===========================
import { usePolygonStore } from 'hooks/usePolygonStore';
// ========================== actions =========================
import * as PolygonStoreActions from 'context/polygon/actions';
// ========================== utils ===========================
import { generateGeoJSON, preparePayload } from 'utils/GIS/DataPreparation';
import fetcher from 'utils/fetcher';
import notify from 'utils/notify';
// ========================== icons ===========================
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import BubbleChartRoundedIcon from '@material-ui/icons/BubbleChartRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
// ======================== components ========================
import { Button } from '@zendeskgarden/react-buttons';
import { Col, Row } from '@zendeskgarden/react-grid';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Stepper } from '@zendeskgarden/react-accordions';
import { Title } from '@zendeskgarden/react-notifications';
import { Tooltip } from '@zendeskgarden/react-tooltips';
// ============================================================

const DemoInstructions = () => {
	const { t } = useTranslation('demoInstructions');

	const [currentStep, setStep] = React.useState(1);

	const nextStep = () => setStep((prevState) => prevState + 1);
	const prevStep = () => setStep((prevState) => prevState - 1);

	const NextButton = () => (
		<Button onClick={nextStep}>{t('buttons.next')}</Button>
	);
	const BackButton = () => (
		<Button onClick={prevStep}>{t('buttons.back')}</Button>
	);
	const SubmitButton = () => {
		const {
			userGeometry: { polygonDispatch },
			mapGeometry: { mapMarkings, setMapMarkings },
		} = usePolygonStore();

		const [canSubmit, setCanSubmit] = React.useState(false);

		React.useEffect(() => {
			mapMarkings.length > 0 ? setCanSubmit(true) : setCanSubmit(false);
		}, [mapMarkings.length]);

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
					const onSuccess = () => {
						polygonDispatch(
							PolygonStoreActions.addData(
								preparePayload(
									response.parsedBody as unknown as NewGeoJSONResponse,
								),
							),
						);

						notify('success', 'Data analysed successfully');
						setMapMarkings([]);
						nextStep();
					};
					onSuccess();
				} catch (response) {
					notify('error', `Error(${response}): Data was not sent!`);
				}
			});
		};

		return (
			<Button disabled={!canSubmit ? true : false} onClick={handleSubmit}>
				{t('buttons.submit')}
			</Button>
		);
	};

	const steps = [
		{
			id: '1',
			icon: <MapRoundedIcon fontSize="inherit" />,
			buttons: <NextButton />,
		},
		{
			id: '2',
			icon: <BorderColorRoundedIcon fontSize="inherit" />,
			buttons: (
				<>
					<Row justifyContent="around">
						<BackButton />
						<SubmitButton />
					</Row>
				</>
			),
		},
		{
			id: '3',
			icon: <BubbleChartRoundedIcon fontSize="inherit" />,
			buttons: <BackButton />,
		},
	];
	return (
		<Row justifyContent="center">
			<Col sm={10} textAlign="center">
				<Title>
					<Stepper activeIndex={currentStep - 1} isHorizontal>
						{steps.map((step) => (
							<Stepper.Step key={step.id}>
								<Stepper.Label icon={step.icon}>
									{t(`steps.${step.id}.label`)}
								</Stepper.Label>
							</Stepper.Step>
						))}
					</Stepper>
				</Title>
				{steps.map(
					(step) =>
						Number(step.id) === currentStep && (
							<S.StepContainer key={step.id}>
								{t(`steps.${step.id}.content`)}
								<S.StepButton>{step.buttons}</S.StepButton>
							</S.StepContainer>
						),
				)}
			</Col>
		</Row>
	);
};

export default DemoInstructions;
