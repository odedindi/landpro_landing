// ======================== react =========================
import * as React from 'react';
import { useRouter } from 'next/router';
// ======================== styles ========================
import { NavBarButton, MenuItemsWrapper } from '../style';
// ====================== translation =====================
import { useTranslation } from 'next-i18next';
// ====================== components ======================
import { pages } from './pagesAndMenuIcons';
import SelectLanguage from 'components/SelectLanguage';
// ========================================================

const MenuItems = () => {
	const { t } = useTranslation('nav');
	const { pathname, push } = useRouter();

	return (
		<>
			<MenuItemsWrapper>
				{pages.map(
					(item: Page) =>
						pathname !== item.path && (
							<NavBarButton key={item.title} onClick={() => push(item.path)}>
								{t(`${item.title}`)}
								{item.icon}
							</NavBarButton>
						),
				)}

				<SelectLanguage />
			</MenuItemsWrapper>
		</>
	);
};

export default MenuItems;
