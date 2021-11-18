import type L from 'leaflet';
import * as React from 'react';

interface MapCenterContext {
	mapCenter: L.Map;
	setMapCenter: React.Dispatch<React.SetStateAction<L.Map>>;
}

const mapCenterContext = React.createContext<MapCenterContext>(undefined!);
const { Provider } = mapCenterContext;

const MapCenterContextProvider: React.FC = ({ children }) => {
	const [mapCenter, setMapCenter] = React.useState<L.Map>(undefined!);

	return <Provider value={{ mapCenter, setMapCenter }}>{children}</Provider>;
};

export { mapCenterContext, MapCenterContextProvider };
