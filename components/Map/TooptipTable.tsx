// ======================= React & Next =======================
import * as React from 'react';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ======================== components ========================
import { Table } from 'antd';
// ============================================================

type TooltipTableProps = {
	area: {
		m2: number;
		ha: number;
	};
	id: PolygonIdType;
	landCover: LandCover;
	soilContent: number;
	vegetationContent: number;
	setOpacitySource: React.Dispatch<React.SetStateAction<string>>;
};
const TooltipTable = ({
	area,
	id,
	landCover,
	soilContent,
	vegetationContent,
}: TooltipTableProps) => {
	const { t } = useTranslation('carbonMap');

	const [tableData] = React.useState(() => [
		{
			key: id,
			area: area.ha,
			landCover: landCover,
			soil: soilContent,
			vegetation: vegetationContent,
		},
	]);
	const [columns] = React.useState(() => [
		{
			title: t('toolTipTable.area_ha'),
			dataIndex: 'area',
			key: 'area',
			width: 40,
		},
		{
			title: `${t('toolTipTable.carbon')} Ton / Ha`,
			width: 100,
			children: [
				{
					title: t('toolTipTable.veg'),
					dataIndex: 'vegetation',
					key: 'vegetation',
					width: 50,
				},
				{
					title: t('toolTipTable.soil'),
					dataIndex: 'soil',
					key: 'soil',
					width: 50,
				},
			],
		},
		{
			title: t('toolTipTable.landCover'),
			dataIndex: 'landCover',
			key: 'landCover',
			width: 40,
		},
	]);
	return <Table columns={columns} dataSource={tableData} pagination={false} />;
};

export default TooltipTable;
