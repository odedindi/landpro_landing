import Link from 'next/link';
import Image from 'next/image';

import { Container } from '../style';

export const NavBarLogo = ({ height, width }: NavBarOrFooterLogo) => (
	<Link passHref href="/" aria-label="homepage">
		<Container>
			<Image
				src="/assets/logos/logo.png"
				alt="landpro logo"
				height={height}
				width={width}
			/>
			<section id="brand">
				<h3 id="land">
					<span>L</span>and
				</h3>
				<h3 id="pro">
					PR<span>O</span>
				</h3>
			</section>
		</Container>
	</Link>
);
