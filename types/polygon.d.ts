// state
type TableDataType = any;
type SubPolygonType = any;
type PolygonIdType = string | number;

type PolygonState = {
	userData: TableDataType[];
	subPolygonsToShow: SubPolygonType[];
	loading: boolean;
};

// actions

type AddData = {
	(data: TableDataType): {
		type: string;
		payload: TableDataType;
	};
};

type ShowSubPolygon = {
	(subPolygon: SubPolygonType): {
		type: string;
		payload: SubPolygonType;
	};
};
type DeletePolygon = {
	(polygonId: PolygonIdType): {
		type: string;
		payload: PolygonIdType;
	};
};
type PolygonActionType = {
	type: string;
	payload: TableDataType | SubPolygonType | PolygonIdType;
};

type PolygonReducer = {
	(state: PolygonState, action: PolygonActionType): {
		subPolygonsToShow: SubPolygonType[];
		userData: TableDataType[];
		loading: boolean;
	};
};
