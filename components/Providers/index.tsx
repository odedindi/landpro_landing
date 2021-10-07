// import SEO from './SEO';
import StyledTheme from './StyledTheme';
import { ZenDeskGardenThemeProvide } from './ZenDeskGarden';
import Toast from './Toaster';
import Context from 'context';

const Providers: React.FC = ({ children }) => (
	<>
		<StyledTheme>
			<ZenDeskGardenThemeProvide>
				{/* <SEO /> */}
				<Toast />
				<Context>{children}</Context>
			</ZenDeskGardenThemeProvide>
		</StyledTheme>
	</>
);

export default Providers;
