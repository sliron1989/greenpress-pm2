const apps = require('./helpers/apps');
module.exports = {
	apps: [
		apps.db,
		apps.auth,
		apps.secrets,
		apps.content,
		apps.assets,
		{
			...apps.admin,
			script: 'start.js',
			args: `${__dirname}/admin 'npm run serve'`
		},
		{
			...apps.front,
			script: 'start.js',
			args: `${__dirname}/blog-front 'npm run dev'`
		}
	]
};
