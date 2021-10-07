// ========================= react =========================
import * as React from 'react';
// ==================== reducer & state ====================
import { initialPolygonState, reducer } from './reducer';
// =========================================================

type PolygonContextType = {
	polygonState: PolygonState;
	polygonDispatch: React.Dispatch<PolygonActionType>;
};
const PolygonContext = React.createContext<Partial<PolygonContextType>>({
	polygonState: initialPolygonState,
});

const { Provider } = PolygonContext;

const PolygonsContextProvider: React.FC = ({ children }) => {
	const [polygonState, polygonDispatch] = React.useReducer(
		reducer,
		initialPolygonState,
	);

	return (
		<Provider value={{ polygonState, polygonDispatch }}>{children}</Provider>
	);
};

export { PolygonContext, PolygonsContextProvider };
