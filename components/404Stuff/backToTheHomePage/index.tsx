// ======================= React & Next =======================
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
// ========================== style ===========================
import * as S from './style';
// ============================================================

const BackToTheHomePage: NextPage = () => (
	<>
		{/* <Head>
			{
				//  eslint-disable-next-line @next/next/no-page-custom-font
			}
			<link
				rel="stylesheet"
				href={
					'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
				}
			/>
		</Head> */}

		<S.Body>
			{/* <S.NotFound>
				<div className="img">
					<img
						src="https://assets.codepen.io/5647096/backToTheHomepage.png"
						alt="Back to the Homepage"
						width="60%"
						height="60%"
					/>
					<img
						src="https://assets.codepen.io/5647096/Delorean.png"
						alt="El Delorean, El Doc y Marti McFly"
						width="60%"
						height="60%"
					/>
				</div>
				<S.Text>
					<h1>404</h1>
					<h2>PAGE NOT FOUND</h2>
					<h3>BACK TO HOME?</h3>
					<Link passHref href="/">
						<a>YES</a>
					</Link>
					<Link passHref href="https://www.youtube.com/watch?v=G3AfIvJBcGo">
						<a>NO</a>
					</Link>
				</S.Text>
			</S.NotFound> */}
		</S.Body>
	</>
);

export default BackToTheHomePage;
