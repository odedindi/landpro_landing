module.exports = {
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de', 'fr'],
		fallbackLng: 'en',
		debug: /*process.env.NODE_ENV === 'development' ? true : */ false,
		interpolation: {
			escapeValue: false,
		},
	},
};
