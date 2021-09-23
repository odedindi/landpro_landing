import LeftContentBlock from './Left';
import RightContentBlock from './Right';

type ContentBlockType = {
	type: string;
} & ContentBlockProps;

const ContentBlock: React.FC<ContentBlockType> = ({
	children,
	content,
	icon,
	iconAlt,
	id,
	isFirst,
	title,
	type,
}) => {
	if (type === 'left')
		return (
			<LeftContentBlock
				content={content}
				icon={icon}
				iconAlt={iconAlt}
				id={id}
				isFirst={isFirst}
				title={title}>
				{children}
			</LeftContentBlock>
		);
	if (type === 'right')
		return (
			<RightContentBlock
				content={content}
				icon={icon}
				iconAlt={iconAlt}
				id={id}
				isFirst={isFirst}
				title={title}>
				{children}
			</RightContentBlock>
		);
	return null;
};

export default ContentBlock;
