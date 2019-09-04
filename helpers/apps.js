const config = require('../config');


module.exports = {
	db: {
		name: 'db',
		script: 'mongod',
		instances: 1,
	},
	auth: {
		name: 'auth',
		script: './auth/index.js',
		instances: 1,
		autorestart: true,
		watch: false,
		max_memory_restart: '1G',
		env: {
			NODE_ENV: 'development',
			MONGO_URI: config.mongoUri,
			JWT_SECRET: config.jwtSecret,
			REFRESH_TOKEN_SECRET: config.refreshTokenSecret,
			PORT: config.authPort,
			IP: config.authIp,
			ROLES: config.roles.all,
			DEFAULT_ROLE: config.roles.default,
			PRIVILEGED_ROLES: config.roles.privileged
		},
		env_production: {
			MONGO_URI: config.mongoUri,
			JWT_SECRET: config.jwtSecret,
			REFRESH_TOKEN_SECRET: config.refreshTokenSecret,
			PORT: config.authPort,
			IP: config.authIp,
			ROLES: config.roles.all,
			DEFAULT_ROLE: config.roles.default,
			PRIVILEGED_ROLES: config.roles.privileged,
			NODE_ENV: 'production'
		}
	},
	content: {
		name: 'content',
		script: './content/index.js',
		instances: 1,
		autorestart: true,
		watch: false,
		max_memory_restart: '1G',
		env: {
			NODE_ENV: 'development',
			MONGO_URI: config.mongoUri,
			PORT: config.contentPort,
			IP: config.contentIp,
			AUTH_SERVICE_PORT: config.authPort,
			AUTH_SERVICE_IP: config.authIp,
			EDITORS_ROLES: config.roles.editors,
		},
		env_production: {
			MONGO_URI: config.mongoUri,
			PORT: config.contentPort,
			IP: config.contentIp,
			AUTH_SERVICE_PORT: config.authPort,
			AUTH_SERVICE_IP: config.authIp,
			EDITORS_ROLES: config.roles.editors,
			NODE_ENV: 'production'
		}
	},
	front: {
		name: 'front',
		script: 'cd blog-front && npm start',
		instances: 1,
		autorestart: true,
		watch: false,
		max_memory_restart: '1G',
		env: {
			PORT: config.port,
			NODE_ENV: 'development'
		},
		env_production: {
			PORT: config.port,
			NODE_ENV: 'production'
		}
	},
	admin: {
		name: 'admin',
		script: 'cd admin && npm run serve',
		instances: 1,
		autorestart: true,
		watch: false,
		max_memory_restart: '1G',
		env: {
			PORT: config.adminPort,
			NODE_ENV: 'development',
			BASE_URL: 'gp-admin',
		},
		env_production: {
			PORT: config.adminPort,
			NODE_ENV: 'production',
			BASE_URL: 'gp-admin',
		}
	}
};