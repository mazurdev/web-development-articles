var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
	configureWebpack: config => {

		if (process.env.NODE_ENV !== 'production') return

		return {
			plugins: [
				new PrerenderSpaPlugin(
					path.join(__dirname, 'dist'),

					[
						'/',
						'/about',
						'/javascript',
						'/angular',
						'/network',
						'/others',
						'/article/js/one',
						'/article/js/two',
						'/article/js/three',
						'/article/js/async',
						'/article/js/objects',
						'/article/js/ecma',
						'/article/angular/performance',
						'/article/net/one',
						'/article/net/two',
						'/article/net/three',
						'/article/others/errors',
						'/article/others/algorithmics-basis',
						'/article/others/css-preload',
						'/article/others/pwa'
					],
					{
						
					}
				)
			]
		}
	}
}