// ======================= React & Next =======================
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
// ========================== styles ==========================
// import * as S from 'styles/page/home';
import { Row } from 'antd';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ========================= icons ========================
// import plantInHands from '../assets/imgs/svg/plantInHands.png';
// import farmland from '../assets/imgs/svg/farmland.png';
// ========================== news ========================
// import { landProNews } from '../components/News/newsFeed';
// ====================== components ======================
const Button = dynamic(() => import('components/Button'));
const MiddleBlock = dynamic(() => import('components/Block/Content/Middle'));
const ContentBlock = dynamic(() => import('components/Block/Content'));
const LandProCarousel = dynamic(() => import('../components/Carousel'));
// const SectionCard = dynamic(() =>
//     import('../components/layout/ContentBlock/sectionCard')
// );

// const NewsCard = dynamic(() => import('../components/News/NewsCard'));

// =========================================================

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
			{/* <S.Header id="pageNavi">
                <S.Container>
                    <Row gutter={15} type="flex" justify="start" align="middle">
                        <S.PageLink onClick={() => scrollTo('about')}>
                            <S.Span>{t('homePage.links.product')}</S.Span>
                        </S.PageLink>

                        <S.PageLink onClick={() => scrollTo('mission')}>
                            <S.Span>{t('homePage.links.mission')}</S.Span>
                        </S.PageLink>

                        <S.PageLink onClick={() => scrollTo('news')}>
                            <S.Span>{t('homePage.links.news')}</S.Span>
                        </S.PageLink>

                        <S.PageLink
                            onClick={() => scrollTo('contact')}
                            style={{ width: '125px' }}
                        >
                            <S.Span>
                                <Button>{t('homePage.links.contact')}</Button>
                            </S.Span>
                        </S.PageLink>
                    </Row>
                </S.Container>
            </S.Header> */}
		</>
	);

	if (!didMount) return null;
	return (
		<main>
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
			<LandProCarousel />
			<MiddleBlock></MiddleBlock>
			{/* 

<ContentBlock
	type="left"
	id="about"
	title={t('about.title')}
	content={t('about.text')}
	icon={plantInHands}
	iconAlt="plant in hands"
>
	{['section1', 'section2', 'section3'].map((section, index) => (
		<SectionCard
			key={section}
			title={t(`about.${section}Title`)}
			content={t(`about.${section}Content`)}
			span={index !== 2 ? 10 : 20}
		/>
	))}
</ContentBlock>

<ContentBlock
	type="right"
	title={t('mission.title')}
	content={t('mission.text')}
	icon="ayoraExample"
	id="mission"
/>

<MiddleBlock title="Latest News" id="news" />
{newsFeed.articles.map((newsItem, index) => (
	<NewsCard key={index} {...newsItem} />
))}
<MiddleBlock />
*/}
			<ContentBlock
				type="left"
				id="product"
				title={t('product.title')}
				content={t('product.text')}
				icon="/assets/imgs/svg/farmland.png"
				iconAlt="farmland"
			/>
		</main>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'nav',
			'common',
			'footer',
		])),
	},
});

export default Home;
