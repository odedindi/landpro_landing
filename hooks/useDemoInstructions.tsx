// ======================= React & Next =======================
import * as React from 'react';
// ========================== hooks ===========================
import { usePolygonStore } from 'hooks';
// ======================== components ========================
import DemoInstructions from 'components/DemoInstructions';
// ============================================================

const useDemoInstructions = () => {
	const [currentDemoStep, setStep] = React.useState(1);
	const nextStep = () => setStep((prev) => ++prev);
	const prevStep = () => setStep((prev) => --prev);

	const {
		mapGeometry: { mapMarkings },
	} = usePolygonStore();

	// Demo instructions steps control
	React.useEffect(() => {
		if (!mapMarkings.length) setStep(1);
		if (currentDemoStep === 1 && mapMarkings.length) nextStep();
	}, [currentDemoStep, mapMarkings]);

	const instructions = (
		<DemoInstructions
			currentStep={currentDemoStep}
			nextStep={nextStep}
			prevStep={prevStep}
		/>
	);

	return { instructions, currentDemoStep };
};

export default useDemoInstructions;
