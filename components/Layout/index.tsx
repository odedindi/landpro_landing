// ======================= React & Next =======================
import * as React from 'react';
// ========================== styles ==========================
import * as S from './style';
// ======================== components ========================
import NavBar from './Navbar';
import Container from './Container';
import Header from './Header';
import ScrollUp from '../ScrollUp';
import Footer from './Footer';
// ========================================================

export const PageLayout: React.FC = ({ children }) => {
	const [didMounted, setDidMounted] = React.useState(false);
	React.useEffect(() => setDidMounted(true), []);

	if (!didMounted) return null;

	return (
		<>
			<S.LayoutWrapper>
				<Header />
				<NavBar />
				<Container>
					{children}
					<ScrollUp />
				</Container>
				<Footer />
			</S.LayoutWrapper>
		</>
	);
};
