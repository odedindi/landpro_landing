// ======================= React & Next =======================
import * as React from 'react';
import { useRouter } from 'next/router';
// ========================== styles ==========================
import * as S from './style';
// ======================== components ========================
import Header from './Header';
import NavBar from './Navbar';
import LandProHero from 'components/Hero';
import Container from './Container';
import ScrollUp from '../ScrollUp';
import Footer from './Footer';
import { routes } from 'utils/constants';
// ========================================================

export const PageLayout: React.FC = ({ children }) => {
	const [didMounted, setDidMounted] = React.useState(false);
	React.useEffect(() => setDidMounted(true), []);

	const { pathname } = useRouter();
	console.log(pathname);
	if (!didMounted) return null;

	return (
		<>
			<S.LayoutWrapper>
				<Header />
				<NavBar />
				{pathname === routes.home && <LandProHero />}
				<Container>
					{children}
					<ScrollUp />
				</Container>
				<Footer />
			</S.LayoutWrapper>
		</>
	);
};
