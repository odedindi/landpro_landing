// ======================= React & Next =======================
import * as React from 'react';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ========================== hooks ===========================
import { usePolygonStore } from 'hooks';
// =========================== data ===========================
import * as PolygonActions from 'context/polygon/actions';
import * as P from 'utils/GIS/DataPreparation';
import * as GIS from 'utils/GIS';
import { datePrettier } from 'utils/datePrettier';
// ======================== components ========================
import Badge from './Badge';
// import { EditableCell, EditableRow } from './EditableCell';
import { Table } from 'antd';
import tableColumns from './Columns';
import TableFooter from './Footer';
// =========================== types ==========================
import type { LatLngExpression } from 'leaflet';
import type { ColumnsType } from 'antd/lib/table';
import type { Key } from 'antd/lib/table/interface';
// ============================================================

type PlotsTableDataType = {
	key: number;
	polygonID: number;
	polygonCenter: LatLngExpression;
	subPolygons: Array<UserDataAnalysisSubPolygonType[]>;
	created: string;
	updated: string;
	id: JSX.Element;
	area_ha: string;
	area_m: string;
	plotName: string;
};

const PlotsTable = () => {
	const { t } = useTranslation('carbonMap');
	const {
		userGeometry: { polygonState, polygonDispatch },
	} = usePolygonStore();

	const [selectedRowKeys, setSelectedRowKeys] = React.useState<Key[]>([]);
	const [PlotsTableData, setPlotsTableData] = React.useState<
		PlotsTableDataType[]
	>([]);

	// update table`s data
	React.useEffect(() => {
		setPlotsTableData(
			polygonState.userData.map(
				({
					analysis: { subPolygons },
					created,
					id,
					originalPolygon: { area, coordinates, type },
					updated,
				}) => ({
					key: id,
					polygonID: id,
					polygonCenter: GIS.getCentroid(coordinates),
					subPolygons: subPolygons,
					created: datePrettier(created),
					updated: updated,
					id: (
						<Badge
							type="WithCounter"
							count={subPolygons.length}
							polygonID={id}
						/>
					),
					area_ha: area.ha,
					area_m: area.m2,
					plotName: type,
				}),
			),
		);
	}, [polygonState.userData]);

	// auto-select newly added polygons
	const [newDataWasAdded, setNewDataWasAdded] = React.useState(false);
	React.useEffect(() => {
		setNewDataWasAdded(true);
	}, [PlotsTableData]);
	// by default each sub-polygon shall be marked
	if (newDataWasAdded && PlotsTableData.length) {
		setTimeout(() => {
			const allSubPolygons = PlotsTableData.map(
				(polygon) => polygon.subPolygons,
			).flat(1);

			const payload = allSubPolygons
				.map((subPolygonsArray) =>
					subPolygonsArray.map(
						(subPolygon) => subPolygon.mapSubPolygonLayerData,
					),
				)
				.flat(1);
			polygonDispatch(PolygonActions.showSubPolygon(payload));
			setNewDataWasAdded(false);
		}, 250);
	}

	const handleEditableCellNewData = (row: { key: number }) => {
		console.log('typeof row: ', typeof row);
		console.log('handleEditableCellNewData(row): ', row);

		const newData = [...PlotsTableData];
		const index = newData.findIndex((item) => row.key === item.key);
		const item = newData[index];
		newData.splice(index, 1, { ...item, ...row });
		setPlotsTableData(newData);
	};

	const columns = tableColumns.outerTable(t).map((col) => {
		return col;
		// if (!col.editable) {
		// 	return col;
		// }
		// return {
		// 	...col,
		// 	onCell: (record: any) => ({
		// 		record,
		// 		editable: col.editable,
		// 		dataIndex: col.dataIndex,
		// 		title: col.title,
		// 		handleSave: handleEditableCellNewData,
		// 	}),
		// };
	});

	// row selection feature
	const rowSelection = React.useMemo(
		() => ({
			selectedRowKeys,
			preserveSelectedRowKeys: true,
			onChange: (selectedRowKeys: Key[], selectedRows: Array<any>) => {
				setSelectedRowKeys(selectedRowKeys);
				const payload = selectedRows.map(
					({
						mapSubPolygonLayerData,
					}: {
						mapSubPolygonLayerData: SubPolygonOnShowList;
					}) => mapSubPolygonLayerData,
				);
				polygonDispatch(PolygonActions.showSubPolygon(payload));
			},
			selections: [
				Table.SELECTION_ALL,
				Table.SELECTION_INVERT,
				Table.SELECTION_NONE,
			],
		}),
		[polygonDispatch, selectedRowKeys],
	);

	// table expandability feature
	const expandedRowRender = React.useCallback(
		({
			area_ha,
			polygonCenter,
			polygonID,
			subPolygons,
			updated,
		}: {
			area_ha: string;
			polygonCenter: LatLngExpression;
			polygonID: PolygonIdType;
			subPolygons: Array<UserDataAnalysisSubPolygonType[]>;
			updated: string;
		}) => {
			const data = subPolygons[0].map((subPolygon) => ({
				key: `subPolygon_${subPolygon.id}`,
				state: (
					<span>
						<Badge
							type="Colorfull"
							color={P.returnLandCoverColor(subPolygon.land_cover)}
						/>
						{t('innerTable.status.updated')}
					</span>
				),
				updated: datePrettier(updated),
				area: ((100 * Number(subPolygon.area.ha)) / Number(area_ha)).toFixed(2),
				mapSubPolygonLayerData: subPolygon.mapSubPolygonLayerData,
				vegetation: subPolygon.veg_co_estimates,
				soil: subPolygon.soil_co_estimates,
			}));
			return (
				<Table
					bordered
					columns={tableColumns.innerTable(t) as ColumnsType<any>}
					dataSource={data}
					pagination={false}
					rowSelection={rowSelection}
					footer={() => (
						<TableFooter polygonID={polygonID} polygonCenter={polygonCenter} />
					)}
				/>
			);
		},
		[rowSelection, t],
	);

	return (
		<Table
			columns={columns}
			expandable={{ expandedRowRender }}
			dataSource={PlotsTableData}
			// rowClassName={() => 'editable-row'}
			// components={{
			// 	body: { row: EditableRow, cell: EditableCell },
			// }}
		/>
	);
};

export default PlotsTable;
