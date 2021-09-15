import LeftContentBlock from './Left';
import RightContentBlock from './Right';

const ContentBlock: React.FC<any> = (props) => {
	if (props.type === 'left') return <LeftContentBlock {...props} />;
	if (props.type === 'right') return <RightContentBlock {...props} />;
	return null;
};

export default ContentBlock;
