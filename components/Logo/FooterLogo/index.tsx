import Image from 'next/image';

export const FooterLogo = ({ height, width }: NavBarOrFooterLogo) => (
	<>
		<Image
			src="/assets/logos/logo.png"
			alt="landpro logo"
			height={height}
			width={width}
		/>
		<p>
			<sup>&copy;</sup> 2021
		</p>
	</>
);
