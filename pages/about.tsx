// ======================= React & Next =======================
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
// ========================== styles ==========================
import * as S from 'styles/pages';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ======================== components ========================
import { Well, Title } from '@zendeskgarden/react-notifications';
import { Paragraph, SM, MD, LG } from '@zendeskgarden/react-typography';

const MiddleBlock = dynamic(() => import('components/ContentBlock/Middle'));
const Card = dynamic(() => import('components/Card'));
// ============================================================

const About: NextPage<{ newsFeed: Article[] }> = ({ newsFeed }) => {
	const { t } = useTranslation('about');

	return (
		<S.PageWrapper>
			<Well isFloating>
				<Paragraph>
					<Title>What is LandPro?</Title>
				</Paragraph>
				<Paragraph>
					Currently LandPro is a simple interface to harness data from different
					sources in a meaningful way. In time LandPro can become a reference
					for validating self-assessment, sharing successes and improve adoption
					of positive practices among farmers, land managers and more.
				</Paragraph>

				<Paragraph>
					Better estimates of CO2 absorption /emissions can be calculated
					combining land cover type with multi-spectral images. Several
					scientific papers have been published on the topic, and we expect
					methods and models to improve greatly in the near future.
				</Paragraph>
				<Paragraph>
					More interactivity: modifying polygons boundaries, adding spatial
					elements, describing land management practices each subareas are
					functionality that can be easily integrated within the user interface.
				</Paragraph>
				<Paragraph>
					Visualization of CO2 changes in time: What is the trend, have there
					been major changes in the recent past. SOC estimates could be updated
					real time based on sentinel images and latest sampling data.
				</Paragraph>
				<Paragraph>
					Comparison with neighboring areas: LandPro can easily provide
					information not only on the area of interest entered by the user, but
					also for the neighboring similar areas. This could provide the user of
					an estimates of its performance, but also suggest locations where
					better practices may be found
				</Paragraph>
				<br />
				<Title>LandPro is based on the following scientific studies: </Title>

				<Paragraph size="small">
					<SM tag="span">
						<a
							href="https://doi.org/10.3390/rs12122008"
							target="_blank"
							rel="noreferrer"
							className="nav-link">
							Issa, S., Dahy, B., Ksiksi, T., & Saleous, N. (2020). A review of
							terrestrial carbon assessment methods using geo-spatial
							technologies with emphasis on arid lands. Remote Sensing, 12(12).
						</a>
					</SM>
				</Paragraph>
				<Paragraph size="small">
					<SM tag="span">
						<a
							href="https://doi.org/https://doi.org/10.1016/j.isprsjprs.2018.11.026"
							target="_blank"
							rel="noreferrer"
							className="nav-link">
							Castaldi, F., Hueni, A., Chabrillat, S., Ward, K., Buttafuoco, G.,
							Bomans, B., … van Wesemael, B. (2019). Evaluating the capability
							of the Sentinel 2 data for soil organic carbon prediction in
							croplands. ISPRS Journal of Photogrammetry and Remote Sensing,
							147, 267–282.
						</a>
					</SM>
				</Paragraph>
				<Paragraph size="small">
					<SM tag="span">
						<a
							href="https://doi.org/10.1016/j.apgeog.2017.06.017"
							target="_blank"
							rel="noreferrer"
							className="nav-link">
							Jucker Riva, M., Daliakopoulos, I. N., Eckert, S., Hodel, E., &
							Liniger, H. (2017). Assessment of land degradation in
							Mediterranean forests and grazing lands using a landscape unit
							approach and the normalized difference vegetation index. Applied
							Geography, 86, 8–21.
						</a>
					</SM>
				</Paragraph>
			</Well>

			<MiddleBlock title="Latest News" id="news" />
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
