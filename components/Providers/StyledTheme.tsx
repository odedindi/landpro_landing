// ================== react ===================
import * as React from 'react';
// ================== style ===================
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

const HiddenDiv = styled.div`
	visibility: hidden;
`;

const StyledTheme: React.FC = ({ children }) => {
	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => setIsMounted(true), []);

	const body = (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
	if (isMounted) return body;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<HiddenDiv>{children}</HiddenDiv>
		</ThemeProvider>
	);
};

export default StyledTheme;
