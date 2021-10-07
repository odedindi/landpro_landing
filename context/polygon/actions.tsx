import * as C from 'utils/constants';

export const addData: AddData = (data) => ({
	type: C.ADD_TABLE_DATA,
	payload: data,
});

export const showSubPolygon: ShowSubPolygon = (subPolygon) => ({
	type: C.SHOW_SUBPOLYGON,
	payload: subPolygon,
});

export const deletePolygon: DeletePolygon = (polygonID) => ({
	type: C.DEL_DATA_FROM_TABLE,
	payload: polygonID,
});
