// ======================= React & Next =======================
import Head from 'next/head';
import { useRouter } from 'next/router';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
// ============================================================

const getTranslationNameSpace = (pathname: string) => {
	switch (pathname) {
		case 'carbonmap':
			return 'carbonMap';
		case 'about':
			return pathname;
		default:
			return 'common';
	}
};

const Header = () => {
	const { t } = useTranslation(
		getTranslationNameSpace(useRouter().pathname.replace('/', '')),
	);

	return (
		<Head>
			<title>{t('header.title')}</title>

			<meta charSet="utf-8" />
			<meta name="theme-color" content="#fff" />
			<meta name="description" content={t('header.description')} />
			<meta name="keywords" content={t('header.keywords')} />
			<link
				data-react-helmet="true"
				rel="icon"
				type="image/png"
				href="/favicon.png"
			/>
		</Head>
	);
};

export default Header;
