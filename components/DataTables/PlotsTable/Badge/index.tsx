import { Colorfull } from './Colorfull';
import { WithCounter } from './WithCounter';

type BadgeProps = {
	type: 'Colorfull' | 'WithCounter';
	color?: string;
	count?: number;
	polygonID?: PolygonIdType;
};
const Badge = ({ color, count, polygonID, type }: BadgeProps) => {
	if (type === 'Colorfull') return <Colorfull color={color as string} />;
	if (type === 'WithCounter')
		return (
			<WithCounter
				count={count as number}
				polygonID={polygonID as PolygonIdType}
			/>
		);
	return null;
};

export default Badge;
