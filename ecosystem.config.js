const apps = require('./helpers/apps');

module.exports = {
	apps: [
		apps.auth,
		apps.secrets,
		apps.content,
		apps.assets,
		apps.front
	],
};
