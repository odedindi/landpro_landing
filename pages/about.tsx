// ======================= React & Next =======================
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
// ========================== styles ==========================
import * as S from 'styles/pages';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ========================== hooks ===========================
import { useDidMount } from 'hooks/useDidMount';
// ======================== components ========================
import { Well, Title } from '@zendeskgarden/react-notifications';
import { Paragraph, SM } from '@zendeskgarden/react-typography';

const MiddleBlock = dynamic(() => import('components/ContentBlock/Middle'));
const Card = dynamic(() => import('components/Card'));
// ============================================================

const BibliographyLink = ({
	content,
	url,
}: {
	content: string;
	url: string;
}) => (
	<Paragraph size="small">
		<SM tag="span">
			<a href={url} target="_blank" rel="noreferrer">
				{content}
			</a>
		</SM>
	</Paragraph>
);

const About: NextPage<{ newsFeed: Article[] }> = ({ newsFeed }) => {
	const didMount = useDidMount();

	const { t } = useTranslation('about');

	if (!didMount) return null;
	return (
		<S.PageWrapper>
			<MiddleBlock title={t('aboutLandPro.title')} id="about" />
			<Well isFloating>
				<Paragraph>{t('aboutLandPro.intro')}</Paragraph>
				<Paragraph>{t('aboutLandPro.co2 estimations')}</Paragraph>
				<Paragraph>{t('aboutLandPro.interactivity')}</Paragraph>
				<Paragraph>{t('aboutLandPro.visualization')}</Paragraph>
				<Paragraph>{t('aboutLandPro.comparison')}</Paragraph>
			</Well>
			<Well isFloating>
				<Title>{t('aboutLandPro.bibliography')}</Title>
				<BibliographyLink
					content={`Issa, S., Dahy, B., Ksiksi, T., & Saleous, N. (2020). A review of
				terrestrial carbon assessment methods using geo-spatial
				technologies with emphasis on arid lands. Remote Sensing, 12(12).`}
					url="https://doi.org/10.3390/rs12122008"
				/>
				<BibliographyLink
					content={`Castaldi, F., Hueni, A., Chabrillat, S., Ward, K., Buttafuoco, G.,
							Bomans, B., … van Wesemael, B. (2019). Evaluating the capability
							of the Sentinel 2 data for soil organic carbon prediction in
							croplands. ISPRS Journal of Photogrammetry and Remote Sensing,
							147, 267–282.`}
					url="https://doi.org/https://doi.org/10.1016/j.isprsjprs.2018.11.026"
				/>
				<BibliographyLink
					content={`Jucker Riva, M., Daliakopoulos, I. N., Eckert, S., Hodel, E., &
							Liniger, H. (2017). Assessment of land degradation in
							Mediterranean forests and grazing lands using a landscape unit
							approach and the normalized difference vegetation index. Applied
							Geography, 86, 8–21.`}
					url="https://doi.org/10.1016/j.apgeog.2017.06.017"
				/>
			</Well>
			<MiddleBlock />

			<MiddleBlock title={t('news.title')} id="news" />
			{newsFeed.map((article) => (
				<Card key={article.title} type="news" article={article} />
			))}

			<MiddleBlock />
		</S.PageWrapper>
	);
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const { news } = await import(`../utils/newsFeed.json`);
	return {
		props: {
			...(await serverSideTranslations(locale as string, [
				'nav',
				'contactForm',
				'about',
				'footer',
			])),
			newsFeed: news as Article[],
		},
	};
};

export default About;
