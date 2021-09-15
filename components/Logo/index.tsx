import { NavBarLogo } from './NavBarLogo';
import { FooterLogo } from './FooterLogo';

type LogoProps = {
	type: 'NavBar' | 'Footer';
};
export const Logo: React.FC<LogoProps> = ({ type }) => {
	if (type === 'NavBar') return <NavBarLogo height="100%" width="60%" />;
	if (type === 'Footer') return <FooterLogo height="80%" width="90%" />;

	return null;
};
