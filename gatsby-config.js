const path = require(`path`)

module.exports = {
	// pathPrefix: "/midlou.github.io",
	// siteMetadata: {
	// 	siteUrl: "https://www.yourdomain.tld",
	// 	title: "midlou.github.io",
	// },
	plugins: [
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [
					"UA-166798367-2", // Google Analytics / GA
				],
				gtagConfig: {
					anonymize_ip: true,
					cookie_expires: 0,
				},
				pluginConfig: {
					head: false,
					respectDNT: true,
					exclude: [],
				},
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					"@components": path.resolve(__dirname, 'src/components'),
					"@images": path.resolve(__dirname, 'src/images'),
					"@shared": path.resolve(__dirname, 'src/shared'),
					"@content": path.resolve(__dirname, 'src/content'),
					"@miceblocksComponents": path.resolve(__dirname, 'src/pages/projects/miceblocks/components'),
					"@miceblocksImages": path.resolve(__dirname, 'src/pages/projects/miceblocks/images'),
				},
				extensions: []
			}
		},
		`gatsby-plugin-fontawesome-css`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-background-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: { 
				name: `images`, 
				path: path.join(__dirname, `src`, `images`) 
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { 
				name: `miceblocksImages`, 
				path: `${__dirname}/src/pages/projects/miceblocks/images` 
			},
		}
	],

};
