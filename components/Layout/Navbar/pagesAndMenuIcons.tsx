// ====================== icons ===========================
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FingerprintRoundedIcon from '@material-ui/icons/FingerprintRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { routes } from 'utils/constants';
// ========================================================

const iconSize = 'medium';
export const menuIcons = {
	home: <HomeRoundedIcon fontSize={iconSize} />,
	about: <FingerprintRoundedIcon fontSize={iconSize} />,
	menu: <MenuRoundedIcon fontSize={iconSize} />,
};

export const pages: Page[] = [
	{
		title: 'home',
		path: routes.home,
		icon: menuIcons.home,
	},
	{
		title: 'about',
		path: routes.about,
		icon: menuIcons.about,
	},
];
