/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
	reactStrictMode: true,
	i18n,
	react: {
		useSuspense: true,
	},
	images: {
		domains: ['https://unpkg.com'],
	},
};
