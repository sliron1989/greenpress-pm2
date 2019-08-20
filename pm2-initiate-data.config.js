const apps = require('./apps');

module.exports = {
	apps: [
		apps.db,
		{
			...apps.auth,
			script: './auth/helpers/init.js',
			autorestart: false,
		},
		{
			...apps.content,
			script: './content/helpers/init.js',
			autorestart: false,
		},
		/*{
			...apps.front,
			script: './blog-front/helpers/init.js'
		}*/
	]
};
