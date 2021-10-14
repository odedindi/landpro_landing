import { Badge } from 'antd';

type WithCounterProps = {
	count: number;
	polygonID: PolygonIdType;
};
export const WithCounter = ({ count, polygonID }: WithCounterProps) => (
	<Badge
		offset={[10, -7.5]}
		overflowCount={10}
		style={{
			color: '#999',
			backgroundColor: '#fff',
			boxShadow: '0 0 0 1px #d9d9d9 inset',
		}}
		count={count}>
		{polygonID}
	</Badge>
);
