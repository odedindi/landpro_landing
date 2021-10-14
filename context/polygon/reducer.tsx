import * as C from 'utils/constants';

const initialPolygonState: PolygonState = {
	userData: [],
	subPolygonsToShow: [],
	loading: false,
};

const polygonReducer = (
	polygonState: PolygonState,
	action: PolygonReducerActionArgument,
): PolygonState => {
	const { payload, type } = action;
	switch (type) {
		case C.ADD_TABLE_DATA:
			return {
				...polygonState,
				userData: [...polygonState.userData, payload as UserDataType],
			};
		case C.DEL_DATA_FROM_TABLE:
			return {
				...polygonState,
				userData: polygonState.userData.filter(
					(polygon) => polygon.id !== (payload as PolygonIdType),
				),
			};
		case C.SHOW_SUBPOLYGON:
			return {
				...polygonState,
				subPolygonsToShow: payload as SubPolygonOnShowList[],
			};
		default:
			throw new Error();
	}
};

export { initialPolygonState, polygonReducer };
