// ====================== icons ===========================
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FingerprintRoundedIcon from '@material-ui/icons/FingerprintRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Routes } from 'utils/constants';
// ========================================================

const iconSize = 'medium';
export const menuIcons = {
	about: <FingerprintRoundedIcon fontSize={iconSize} />,
	home: <HomeRoundedIcon fontSize={iconSize} />,
	map: <MapRoundedIcon fontSize={iconSize} />,
	menu: <MenuRoundedIcon fontSize={iconSize} />,
};

export const pages: Page[] = [
	{
		title: 'home',
		path: Routes.home,
		icon: menuIcons.home,
	},
	{
		title: 'about',
		path: Routes.about,
		icon: menuIcons.about,
	},
	{
		title: 'demo',
		path: Routes.map,
		icon: menuIcons.map,
	},
];
