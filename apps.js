const config = require('./config');


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
			ROLES: 'user,editor,admin',
			DEFAULT_ROLE: 'user',
			PRIVILEGED_ROLES: 'admin'
		},
		env_production: {
			MONGO_URI: config.mongoUri,
			JWT_SECRET: config.jwtSecret,
			REFRESH_TOKEN_SECRET: config.refreshTokenSecret,
			PORT: config.authPort,
			IP: config.authIp,
			ROLES: 'user,editor,admin',
			DEFAULT_ROLE: 'user',
			PRIVILEGED_ROLES: 'admin',
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
		},
		env_production: {
			MONGO_URI: config.mongoUri,
			PORT: config.contentPort,
			IP: config.contentIp,
			AUTH_SERVICE_PORT: config.authPort,
			AUTH_SERVICE_IP: config.authIp,
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
	}
};