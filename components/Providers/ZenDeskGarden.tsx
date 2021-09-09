import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';

export const ZenDeskGardenThemeProvide: React.FC = ({ children }) => (
	<ThemeProvider theme={{ ...DEFAULT_THEME, rtl: false }}>
		{children}
	</ThemeProvider>
);
