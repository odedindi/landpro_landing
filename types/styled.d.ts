import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		brand: string;
		logo: string;
		colors: {
			background: string;
			header: string;
			paragraph: string;
			anchor: string;
		};
	}
}
