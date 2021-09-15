/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
// ======================= React & Next =======================
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
// ========================== styles ==========================
import * as S from 'styles/404';
// ======================= translations =======================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ======================== animation =========================
import gsap from 'gsap';
import AstrunautSVG from 'components/404Stuff/AstrunautSVG';
// ============================================================

const PageNotFound: NextPage = () => {
	const { t } = useTranslation('404');
	const componentWrapperRef = React.useRef<HTMLElement>(null);
	const timeline = React.useRef<gsap.core.Timeline>();
	const selector = gsap.utils.selector(componentWrapperRef);

	const [didMount, setDidMount] = React.useState(false);
	React.useEffect(() => setDidMount(true), []);

	React.useEffect(() => {
		if (didMount) {
			timeline.current = gsap
				.timeline()
				.set(selector('svg'), { visibility: 'visible' });
			timeline.current = gsap.timeline().to(selector('#headStripe'), {
				y: 0.5,
				rotation: 1,
				yoyo: true,
				repeat: -1,
				ease: 'sine.inOut',
				duration: 1,
			});
			timeline.current = gsap.timeline().to(selector('#spaceman'), {
				y: 0.5,
				rotation: 1,
				yoyo: true,
				repeat: -1,
				ease: 'sine.inOut',
				duration: 1,
			});
			timeline.current = gsap.timeline().to(selector('#craterSmall'), {
				x: -3,
				yoyo: true,
				repeat: -1,
				duration: 1,
				ease: 'sine.inOut',
			});
			timeline.current = gsap.timeline().to(selector('#craterBig'), {
				x: 3,
				yoyo: true,
				repeat: -1,
				duration: 1,
				ease: 'sine.inOut',
			});
			timeline.current = gsap.timeline().to(selector('#planet'), {
				rotation: -2,
				yoyo: true,
				repeat: -1,
				duration: 1,
				ease: 'sine.inOut',
				transformOrigin: '50% 50%',
			});

			timeline.current = gsap.timeline().to(selector('#starsBig g'), {
				rotation: 'random(-30,30)',
				transformOrigin: '50% 50%',
				yoyo: true,
				repeat: -1,
				ease: 'sine.inOut',
			});
			timeline.current = gsap.timeline().fromTo(
				selector('#starsSmall g'),
				{ scale: 0, transformOrigin: '50% 50%' },
				{
					scale: 1,
					transformOrigin: '50% 50%',
					yoyo: true,
					repeat: -1,
					stagger: 0.1,
				},
			);
			timeline.current = gsap.timeline().to(selector('#circlesSmall circle'), {
				y: -4,
				yoyo: true,
				duration: 1,
				ease: 'sine.inOut',
				repeat: -1,
			});
			timeline.current = gsap.timeline().to(selector('#circlesBig circle'), {
				y: -2,
				yoyo: true,
				duration: 1,
				ease: 'sine.inOut',
				repeat: -1,
			});

			timeline.current = gsap
				.timeline()
				.set(selector('#glassShine'), { x: -68 });

			timeline.current = gsap.timeline().to(selector('#glassShine'), {
				x: 80,
				duration: 2,
				rotation: -30,
				ease: 'expo.inOut',
				transformOrigin: '50% 50%',
				repeat: -1,
				repeatDelay: 8,
				delay: 2,
			});
		}
	}, [didMount, selector]);
	if (!didMount) return null;
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Nunito+Sans"
				/>
			</Head>
			<S.Body>
				<main ref={componentWrapperRef}>
					<S.Container>
						<S.Row>
							<AstrunautSVG />
							<S.Col>
								<h1>404</h1>
								<h2>{t('title')}</h2>
								<p>{t('text')}</p>
								<Link href="/" passHref>
									<S.GreenButton>{t('homeButton')}</S.GreenButton>
								</Link>
							</S.Col>
						</S.Row>
					</S.Container>
				</main>
			</S.Body>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'nav',
			'common',
			'404',
			'footer',
		])),
	},
});
export default PageNotFound;
