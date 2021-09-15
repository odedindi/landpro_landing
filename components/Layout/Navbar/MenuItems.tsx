// ======================== react =========================
import * as React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
// ======================== styles ========================
import { NavBarButton, MenuItemsWrapper } from '../style';
// ====================== translation =====================
import { useTranslation } from 'next-i18next';
// ====================== components ======================
import { pages } from './pagesAndMenuIcons';
import SelectLanguage from 'components/SelectLanguage';
const ContactFrom = dynamic(() => import('components/ContactForm'));
// ========================================================

const MenuItems = () => {
	const { t } = useTranslation('nav');
	const { pathname, push } = useRouter();

	return (
		<>
			<MenuItemsWrapper>
				<ContactFrom id="contact" title={t('contact.title')} />
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
