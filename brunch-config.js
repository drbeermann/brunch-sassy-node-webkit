var path = require('path');

exports.config = {
	
	modules: {
		definition: false,
		wrapper: false
	},

	paths: {
		"public": "_public",
		// Could define watched here
		watcher: /^app(\/styles)?/
	},

	files: {
		javascripts: {

			joinTo: {

				"app.js": /^app/,
				"js/vendor.js":  /^(bower_components|vendor)/
			},

			order: {
				before: [
					//'bower_components/respond/respond.src.js',
					'bower_components/console-polyfill/index.js',

					// jquery
					'bower_components/jquery/jquery.js',

					// angular
					'bower_components/angular/angular.js',

					// bootstrap
					'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap.js'
				]
			}
		},

		stylesheets: {
			joinTo: {
				'css/app.css': /^app[\/\\]+styles[\/\\]+/
			},
		}	
	},

	conventions: {
		assets: /^app[\/\\]+assets[\/\\]+/,
		ignored: /^(bower_components[\/\\]+bootstrap-sass|(.*?[\/\\]+)?[_]\w*)/
	},

	plugins: {
		sass: {

			mode: 'ruby',
			debug: 'comments',
			options: {
        		includePaths: ['bower_components/bootstrap-sass/vendor/assets/stylesheets']
			}
		}
	},

	notifications: true,
	minify: false

}