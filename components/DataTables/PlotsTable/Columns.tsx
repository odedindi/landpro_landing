// ======================= React & Next =======================
import * as React from 'react';
// ========================== types ===========================
import { TFunction } from 'next-i18next';
import { Breakpoint } from 'antd/lib/_util/responsiveObserve';
// ========================== icons ===========================
import { DownOutlined } from '@ant-design/icons';
// ======================== components ========================
import { Button, Dropdown, Menu, Space } from 'antd';
// ============================================================

const outerTable = (t: TFunction) => [
	{
		title: t('outerTable.id'),
		dataIndex: 'id',
		key: 'id',
		width: 40,
	},
	{
		title: t('outerTable.date'),
		dataIndex: 'created',
		key: 'created',
		width: 50,
		responsive: ['lg'] as Breakpoint[],
	},
	{
		title: t('outerTable.area_ha'),
		dataIndex: 'area_ha',
		key: 'area_ha',
		width: 60,
	},
	{
		title: t('outerTable.area_m2'),
		dataIndex: 'area_m',
		key: 'area_m',
		width: 80,
		responsive: ['md'] as Breakpoint[],
	},
	{
		title: t('outerTable.plotName'),
		dataIndex: 'plotName',
		key: 'plotName',
		width: 150,
		// editable: true,
	},
];

const MenuDropdown = ({ t }: { t: TFunction }) => {
	const menu = (
		<Menu>
			<Menu.Item key="update">
				<Button>{t('innerTable.updateMenuBtn')}</Button>
			</Menu.Item>
			<Menu.Item key="report">
				<Button>{t('innerTable.reportMenuBtn')}</Button>
			</Menu.Item>
		</Menu>
	);

	return (
		<Space size="large">
			<Dropdown overlay={menu}>
				<a href="#0">
					{t('innerTable.options')} <DownOutlined />
				</a>
			</Dropdown>
		</Space>
	);
};

const innerTable = (t: TFunction) => [
	{ title: '', dataIndex: 'state', key: 'state', width: 40 },
	{
		title: t('innerTable.lastUpdate'),
		dataIndex: 'updated',
		key: 'updated',
		width: 40,
		responsive: ['md'] as Breakpoint[],
		sorter: (a: any, b: any) => a.updated - b.updated,
	},
	{
		title: t('innerTable.area'),
		dataIndex: 'area',
		key: 'area',
		width: 60,
		sorter: (a: any, b: any) => a.area - b.area,
	},
	{
		title: `${t('innerTable.carbon')} Ton / Ha`,
		width: 100,
		children: [
			{
				title: t('innerTable.veg'),
				dataIndex: 'vegetation',
				key: 'vegetation',
				width: 100,
				sorter: (a: any, b: any) => a.vegetation - b.vegetation,
			},
			{
				title: t('innerTable.soil'),
				dataIndex: 'soil',
				key: 'soil',
				width: 100,
				sorter: (a: any, b: any) => a.soil - b.soil,
			},
		],
	},
	{
		title: '',
		dataIndex: 'operation',
		key: 'operation',
		width: 60,
		responsive: ['md'] as Breakpoint[],
		// render: <MenuDropdown t={t} />,
	},
];

const tableColumns = {
	outerTable: outerTable,
	innerTable: innerTable,
};

export default tableColumns;
