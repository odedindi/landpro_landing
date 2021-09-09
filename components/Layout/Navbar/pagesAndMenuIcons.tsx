// ====================== icons ===========================
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import MapRoundedIcon from '@material-ui/icons/MapRounded';
// import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import FingerprintRoundedIcon from '@material-ui/icons/FingerprintRounded';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
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
		path: '/',
		icon: menuIcons.home,
	},
	{
		title: 'about',
		path: '/about',
		icon: menuIcons.about,
	},
];
