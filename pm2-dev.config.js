const apps = require('./helpers/apps');

module.exports = {
	apps: [
		apps.db,
		apps.auth,
		apps.secrets,
		apps.content,
		apps.assets,
		apps.admin,
		{
			...apps.front,
			script: 'cd blog-front && npm run dev'
		}
	]
};
