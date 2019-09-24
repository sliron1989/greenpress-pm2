module.exports = {
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost/greenpress',
  jwtSecret: process.env.JWT_SECRET || 'a secret phrase!!',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'a secret 2 phrase!!',
  secretsServiceSecret: process.env.SECRETS_SERVICE_SECRET || 'ENCRYPT_INTERNAL_DATA',
  authPort: process.env.AUTH_PORT || 9000,
  authIp: process.env.AUTH_IP || '127.0.0.1',
  contentPort: process.env.CONTENT_PORT || 9001,
  contentIp: process.env.CONTENT_IP || '127.0.0.1',
  secretsPort: process.env.SECRETS_PORT || 9002,
  secretsIp: process.env.SECRETS_IP || '127.0.0.1',
  assetsPort: process.env.ASSETS_PORT || 9003,
  assetsIp: process.env.ASSETS_IP || '127.0.0.1',
  adminPort: process.env.ADMIN_PORT || 3001,
  port: process.env.PORT || 3000,
  internalServicesSecret: (Date.now() / Number(Date.now().toString().substring(-5)) * Math.random()).toString(),
  roles: {
    all: 'user,editor,admin',
    default: 'user',
    privileged: 'admin',
    editors: 'editor,admin'
  }
}
