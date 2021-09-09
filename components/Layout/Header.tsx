import Head from 'next/head';
import { useTranslation } from 'next-i18next';

const Header = () => {
	const { t } = useTranslation('common');

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
