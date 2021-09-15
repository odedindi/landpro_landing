import Image from 'next/image';

export const FooterLogo = ({ height, width }: NavBarOrFooterLogo) => (
	<>
		<Image
			src="/assets/logos/logo.png"
			alt="landpro logo"
			height={height}
			width={width}
		/>
		<p>&copy;{new Date().getFullYear()}</p>
	</>
);
