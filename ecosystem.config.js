const apps = require('./apps');

module.exports = {
	apps: [
		apps.auth,
		apps.content,
		apps.front
	],
};