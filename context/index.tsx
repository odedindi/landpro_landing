import { AuthContextProvider } from './auth';
import { MapCenterContextProvider } from './MapCenter';
import { PolygonsContextProvider } from './polygon';

const Context: React.FC = ({ children }) => (
	<AuthContextProvider>
		<PolygonsContextProvider>
			<MapCenterContextProvider>{children}</MapCenterContextProvider>
		</PolygonsContextProvider>
	</AuthContextProvider>
);

export default Context;
