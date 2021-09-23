// ======================= React & Next =======================
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
// ========================== styles ==========================
import * as S from 'styles/pages';
import { Row } from 'antd';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ======================== components ========================
const AyoraExample = dynamic(() => import('components/AyoraExample'));
const ContactFrom = dynamic(() => import('components/ContactForm'));
const ContentBlock = dynamic(() => import('components/ContentBlock'));
const LandProInfo = dynamic(() => import('components/LandproInfo'));
const MiddleBlock = dynamic(() => import('components/ContentBlock/Middle'));
// ============================================================

const Home: NextPage = () => {
	const [didMount, setDidMount] = React.useState(false);
	React.useEffect(() => setDidMount(true), []);

	const { t } = useTranslation('common');

	const scrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) element.scrollIntoView({ behavior: 'smooth' });
	};

	const PageNavi = () => (
		<>
			<S.PageNaviWrapper id="pageNavi">
				<Row justify="start" align="middle">
					<S.PageLink onClick={() => scrollTo('intoSub')}>
						<S.Span>{t('links.ai')}</S.Span>
					</S.PageLink>

					<S.PageLink onClick={() => scrollTo('users')}>
						<S.Span>{t('links.users')}</S.Span>
					</S.PageLink>
				</Row>
			</S.PageNaviWrapper>
		</>
	);

	if (!didMount) return null;

	return (
		<S.PageWrapper>
			<PageNavi />
			<ContentBlock
				isFirst={true}
				id="intro"
				type="right"
				title={t('intro.title')}
				content={t('intro.text')}
				icon="/assets/imgs/svg/greenField.png"
				iconAlt="greenField"
			/>
			<MiddleBlock
				id="intoSub"
				title={t('introSub.title')}
				content={t('introSub.text')}
			/>

			<MiddleBlock id="ai" title={t('ai.title')} content={t('ai.text')}>
				<AyoraExample />
			</MiddleBlock>

			<MiddleBlock id="how" title={t('how.title')} content={t('')}>
				<LandProInfo type="ProcessStages" />
			</MiddleBlock>

			<MiddleBlock
				id="users"
				title={t('users.title')}
				content={t('users.text')}>
				<LandProInfo type="PotentialUsers" />
			</MiddleBlock>

			<ContentBlock
				type="left"
				id="that is it"
				title={t('that is it.title')}
				content={t('that is it.text')}
				icon="/assets/imgs/svg/farmland.png"
				iconAlt="farmland">
				<h6>{t('that is it.interested')}</h6>
				<ContactFrom id="contact" />
			</ContentBlock>
		</S.PageWrapper>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'nav',
			'contactForm',
			'common',
			'footer',
		])),
	},
});

export default Home;
