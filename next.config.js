/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const withTM = require('next-transpile-modules')([
	'three',
	'react-three-fiber',
]);

module.exports = withTM({
	reactStrictMode: true,
	i18n,
	react: {
		useSuspense: true,
	},
	webpack(config, _options) {
		config.module.rules.push({
			test: /\.(glb|gltf)$/,
			use: { loader: 'file-loader' },
		});
		config.module.rules.push({
			test: /\.(glsl|vs|fs)$/,
			use: { loader: 'ts-shader-loader' },
		});
		return config;
	},
	images: {
		domains: ['assets.codepen.io'],
	},
});
