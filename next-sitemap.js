// !STARTERCONF Change the siteUrl
module.exports = {
	siteUrl: 'https://tigor.web.id/web',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/' }],
	},
}
