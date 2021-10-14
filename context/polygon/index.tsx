// ========================== React  ==========================
import * as React from 'react';
// ===================== reducer & state ======================
import { initialPolygonState, polygonReducer } from './reducer';
// ============================================================

const PolygonContext = React.createContext<PolygonContextType>(undefined!);

const { Provider } = PolygonContext;

const PolygonsContextProvider: React.FC = ({ children }) => {
	const [polygonState, polygonDispatch] = React.useReducer(
		polygonReducer,
		initialPolygonState,
	);

	const [mapMarkings, setMapMarkings] = React.useState<
		LeafletGeometryElement[]
	>([]);

	const userGeometry: UserGeometry = { polygonState, polygonDispatch };
	const mapGeometry: MapGeometry = { mapMarkings, setMapMarkings };

	return <Provider value={{ userGeometry, mapGeometry }}>{children}</Provider>;
};

export { PolygonContext, PolygonsContextProvider };
