// ======================== react =========================
import * as React from 'react';
// ======================== styles ========================
import * as S from '../style';
// ===================== translations =====================
import { useTranslation } from 'next-i18next';
// ====================== icons ===========================
import { menuIcons } from './pagesAndMenuIcons';
// ====================== components ======================
import { Button } from '@zendeskgarden/react-buttons';
import { Logo } from 'components/Logo';
import MenuItems from './MenuItems';
import { MenuDrawer } from './MenuDrawer';
// ========================================================

const NavBar = () => {
	const { t } = useTranslation('nav');

	const [showDrawerState, setShowDrawerState] = React.useState(false);
	const showDrawerHandler = () => setShowDrawerState(!showDrawerState);

	return (
		<S.NavBarWrapper id="navBar">
			<Logo />

			<S.ButtonsWrapper>
				<S.ShowOnBigScreen>
					<MenuItems />
				</S.ShowOnBigScreen>

				<S.ShowOnSmallScreen>
					<S.NavBarButton onClick={showDrawerHandler}>
						<Button.StartIcon>{menuIcons.menu}</Button.StartIcon>
					</S.NavBarButton>
				</S.ShowOnSmallScreen>

				{showDrawerState && (
					<MenuDrawer
						showDrawerHandler={showDrawerHandler}
						title={t('drawerTitle')}
						body={<MenuItems />}
					/>
				)}
			</S.ButtonsWrapper>
		</S.NavBarWrapper>
	);
};

export default NavBar;
