import PotentialUsers from './PotentialUsers';
import ProcessStages from './ProcessStages';

type LandProInfoProps = {
	type: 'PotentialUsers' | 'ProcessStages';
};
const LandProInfo = ({ type }: LandProInfoProps) => {
	if (type === 'PotentialUsers') return <PotentialUsers />;
	if (type === 'ProcessStages') return <ProcessStages />;

	return null;
};
export default LandProInfo;
