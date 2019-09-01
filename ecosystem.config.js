const apps = require('./helpers/apps');

module.exports = {
	apps: [
		apps.auth,
		apps.content,
		apps.front
	],
};