/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import * as React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import * as S from 'styles/404';

import gsap from 'gsap';
import AstrunautSVG from 'components/404Stuff/AstrunautSVG';

const PageNotFound: NextPage = () => {
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
						{/* <S.Col>
							<S.Moon>
								<div className="crater"></div>
								<div className="crater"></div>
								<div className="crater"></div>
								<div className="crater"></div>
								<div className="crater"></div>
								<div className="flag"></div>
								<div className="rover">
									<div className="body"></div>
									<div className="wheels"></div>
									<div className="trace"></div>
								</div>
							</S.Moon>
						</S.Col> */}
						<S.Row>
							<AstrunautSVG />
							<S.Col>
								<h1>404</h1>
								<h2>UH OH! You&#39re lost.</h2>
								<p>
									The page you are looking for does not exist. How you got here
									is a mystery. But you can click the button below to go back to
									the homepage.
								</p>
								<Link href="/" passHref>
									<S.GreenButton>HOME</S.GreenButton>
								</Link>
							</S.Col>
						</S.Row>
					</S.Container>
				</main>
			</S.Body>
		</>
	);
};
export default PageNotFound;
