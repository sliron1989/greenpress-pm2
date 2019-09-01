module.exports = {
	mongoUri: process.env.MONGODB_URI || "mongodb://localhost/greenpress",
	jwtSecret: process.env.JWT_SECRET || "a secret phrase!!",
	refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "a secret 2 phrase!!",
	authPort: process.env.AUTH_PORT || 9000,
	authIp: process.env.AUTH_IP || '127.0.0.1',
	contentPort: process.env.CONTENT_PORT || 9001,
	contentIp: process.env.CONTENT_IP || '127.0.0.1',
	port: process.env.PORT || 3000,
	roles: {
		all: 'user,editor,admin',
		default: 'user',
		privileged: 'admin',
		editors: 'editor,admin'
	}
};
