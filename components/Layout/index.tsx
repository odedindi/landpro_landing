// ======================= React & Next =======================
import * as React from 'react';
import { useRouter } from 'next/router';
// ========================== hooks ===========================
import { useElementIsVisible } from 'hooks';
// ========================== styles ==========================
import * as S from './style';
// ======================== components ========================
import Header from './Header';
import NavBar from './Navbar';
import LandProHero from 'components/Hero';
import Container from './Container';
import ScrollUp from '../ScrollUp';
import Footer from './Footer';
import { Routes } from 'utils/constants';
// ========================================================

export const PageLayout: React.FC = ({ children }) => {
	const { pathname } = useRouter();

	const { isVisible, elementToCheckIfVisible } =
		useElementIsVisible<HTMLDivElement>(-10);

	const [didMounted, setDidMounted] = React.useState(false);
	React.useEffect(() => setDidMounted(true), []);
	if (!didMounted) return null;

	return (
		<>
			<S.LayoutWrapper>
				<Header />
				<div ref={elementToCheckIfVisible}>
					<NavBar />
				</div>
				{pathname === Routes.home && <LandProHero />}
				<Container>
					{children}
					<ScrollUp disable={isVisible ? true : false} />
				</Container>
				<Footer />
			</S.LayoutWrapper>
		</>
	);
};
