const customMediaQuery = (maxWidth: number) =>
	`@media only screen and (max-width: ${maxWidth}px)`;

export const device = {
	desktop: customMediaQuery(1440),
	tablet: customMediaQuery(768),
	phone: customMediaQuery(480),
	xs: customMediaQuery(300),
};
