// ======================= React & Next =======================
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Router from 'next/router';
// ========================== styles ==========================
import 'antd/dist/antd.css'; // styles for antd'
import 'nprogress/nprogress.css'; //styles of nprogress
import 'styles/modified-carousel.css'; // styling for alice-carousel used in the Ayora example
import { PageLayout } from 'components/Layout';
// ======================== components ========================
import NProgress from 'nprogress'; //nprogress module
import Providers from 'components/Providers';
// ============================================================

const MyApp = ({ Component, pageProps }: AppProps) => {
	NProgress.configure({ showSpinner: false });

	Router.events.on('routeChangeStart', () => NProgress.start());
	Router.events.on('routeChangeComplete', () => NProgress.done());
	Router.events.on('routeChangeError', () => NProgress.done());

	return (
		<Providers>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</Providers>
	);
};
export default appWithTranslation(MyApp);
