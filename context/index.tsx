import { AuthContextProvider } from './auth';
import { PolygonsContextProvider } from './polygon';

const Context: React.FC = ({ children }) => (
	<AuthContextProvider>
		<PolygonsContextProvider>{children}</PolygonsContextProvider>
	</AuthContextProvider>
);

export default Context;
