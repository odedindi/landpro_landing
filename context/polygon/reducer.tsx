import * as C from 'utils/constants';

const initialPolygonState: PolygonState = {
	userData: [],
	subPolygonsToShow: [],
	loading: true,
};

const reducer: PolygonReducer = (
	polygonState = initialPolygonState,
	action,
) => {
	const { payload, type } = action;
	switch (type) {
		case C.ADD_TABLE_DATA:
			return {
				...polygonState,
				userData: [...polygonState.userData, payload],
			};
		case C.DEL_DATA_FROM_TABLE:
			return {
				...polygonState,
				userData: polygonState.userData.filter(
					(polygon) => polygon.id !== payload,
				),
			};
		case C.SHOW_SUBPOLYGON:
			return {
				...polygonState,
				subPolygonsToShow: payload,
			};
		default:
			throw new Error();
	}
};

export { initialPolygonState, reducer };
