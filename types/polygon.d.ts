type PolygonIdType = string | number;
type UserDataOriginalPolygonType = {
	type: 'Polygon';
	coordinates: GeoLocation[];
	area: {
		m2: string;
		ha: string;
	};
};
type UserDataAnalysisSubPolygonType = {
	id: string;
	coordinates: GeoLocation[];
	area: {
		m2: string;
		ha: string;
	};
	land_cover: LandCover;
	soil_co_estimates: number | null;
	veg_co_estimates: number | null;
	mapSubPolygonLayerData: SubPolygonOnShowList;
};
type UserDataAnalysisType = {
	type: 'FeatureCollection';
	subPolygons: Array<UserDataAnalysisSubPolygonType[]>;
};
// state
type UserDataType = {
	created: string;
	updated: string;
	id: number;
	originalPolygon: UserDataOriginalPolygonType;
	analysis: UserDataAnalysisType;
};

type PolygonState = {
	userData: UserDataType[];
	subPolygonsToShow: SubPolygonOnShowList[];
	loading: boolean;
};

// actions
type AddData = {
	(data: UserDataType): {
		type: 'ADD_TABLE_DATA';
		payload: UserDataType;
	};
};

type ShowSubPolygon = {
	(subPolygon: SubPolygonOnShowList[]): {
		type: 'SHOW_SUBPOLYGON';
		payload: SubPolygonOnShowList[];
	};
};
type DeletePolygon = {
	(polygonId: PolygonIdType): {
		type: 'DEL_DATA_FROM_TABLE';
		payload: PolygonIdType;
	};
};
type PolygonReducerActionArgument =
	| {
			type: 'ADD_TABLE_DATA';
			payload: UserDataType;
	  }
	| {
			type: 'SHOW_SUBPOLYGON';
			payload: SubPolygonOnShowList[];
	  }
	| {
			type: 'DEL_DATA_FROM_TABLE';
			payload: PolygonIdType;
	  };
