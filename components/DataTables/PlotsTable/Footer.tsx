// ======================= React & Next =======================
import * as React from 'react';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ========================== hooks ===========================
import { useMapCenter, usePolygonStore } from 'hooks';
// ========================== actions =========================
import * as PolygonActions from 'context/polygon/actions';
// =========================== GIS ============================
import { flyTo } from 'utils/GIS/flyTo';
import { LatLngExpression } from 'leaflet';
// ======================== components ========================
import { Button, Col, Popconfirm, Row } from 'antd';
import { AimOutlined, DeleteOutlined } from '@ant-design/icons';
// ============================================================

type TableFooterProps = {
	polygonCenter: LatLngExpression;
	polygonID: PolygonIdType;
};
const TableFooter = ({ polygonCenter, polygonID }: TableFooterProps) => {
	const { t } = useTranslation('carbonMap');
	const { mapCenter } = useMapCenter();
	const {
		userGeometry: { polygonDispatch },
	} = usePolygonStore();

	return (
		<Row justify="space-around">
			<Col lg={4} md={2} sm={6} xs={4}>
				<Button
					type="primary"
					shape="round"
					size="large"
					icon={<AimOutlined />}
					onClick={() => {
						console.log(mapCenter);
						flyTo(mapCenter, { to: 'polygon', at: polygonCenter });
					}}
				/>
			</Col>
			<Col lg={2} md={2} sm={6} xs={4}>
				<Popconfirm
					title={t('outerTable.footer.confirmDelete')}
					onConfirm={() =>
						polygonDispatch(PolygonActions.deletePolygon(polygonID))
					}>
					<Button
						type="primary"
						danger
						shape="round"
						size="large"
						icon={<DeleteOutlined />}
					/>
				</Popconfirm>
			</Col>
		</Row>
	);
};
export default TableFooter;
