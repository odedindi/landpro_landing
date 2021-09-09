// import SEO from './SEO';
import StyledTheme from './StyledTheme';
import { ZenDeskGardenThemeProvide } from './ZenDeskGarden';
// import Toast from './Toaster';

const Providers: React.FC = ({ children }) => (
	<>
		<StyledTheme>
			<ZenDeskGardenThemeProvide>
				{/* <SEO /> */}
				{/* <Toast /> */}

				{children}
			</ZenDeskGardenThemeProvide>
		</StyledTheme>
	</>
);

export default Providers;
