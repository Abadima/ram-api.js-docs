// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Ram-API.js Documentation',
	tagline: 'Node  JS Wrapper for RAM API',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://your-docusaurus-site.example.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Gamearoo\'s Development', // Usually your GitHub org/user name.
	projectName: 'ram-api.js-docs', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: [ 'en' ],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js'
				},
				blog: {
					showReadingTime: true
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			docs: {
				sidebar: {
					hideable: true,
				}
			},
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'ram-api.js',
				/*        logo: {
						  alt: 'RAM API LOGO',
						  src: 'img/ram-api.png',
						},*/
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'tutorialSidebar',
						position: 'left',
						label: 'Documentation',
					},
					/*          {to: '/blog', label: 'Blog', position: 'left'},*/
					{
						href: 'https://www.npmjs.com/package/ram-api.js',
						label: 'NPM',
						position: 'left',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/ffQ8wUgQWM',
							}
						]
					},
					{
						title: 'More',
						items: [
							/*              {
											label: 'Blog',
											to: '/blog',
										  },*/
							{
								label: 'NPM',
								href: 'https://www.npmjs.com/package/ram-api.js',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Gamearoo's Development. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			stylesheets: [
				'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap',
				'https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap'
			]
		})
};

export default config;
