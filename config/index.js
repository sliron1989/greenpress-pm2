const localhost = '127.0.0.1'

module.exports = {
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost/greenpress',
  jwtSecret: process.env.JWT_SECRET || 'a secret phrase!!',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'a secret 2 phrase!!',
  secretsServiceSecret: process.env.SECRETS_SERVICE_SECRET || 'ENCRYPT_INTERNAL_DATA',
  assetsSecretsToken: process.env.ASSETS_SECRETS_TOKEN || 'assets-token-phrase',
  internalServicesSecret: process.env.INTERNAL_SECRET || (Date.now() / Number(Date.now().toString().substring(-5)) * Math.random()).toString(),
  authPort: process.env.AUTH_PORT || 9000,
  authIp: process.env.AUTH_IP || localhost,
  contentPort: process.env.CONTENT_PORT || 9001,
  contentIp: process.env.CONTENT_IP || localhost,
  secretsPort: process.env.SECRETS_PORT || 9002,
  secretsIp: process.env.SECRETS_IP || localhost,
  assetsPort: process.env.ASSETS_PORT || 9003,
  assetsIp: process.env.ASSETS_IP || localhost,
  adminPort: process.env.ADMIN_PORT || 3001,
  adminIp: process.env.ADMIN_IP || localhost,
  port: process.env.PORT || 3000,
  roles: {
    all: 'user,editor,admin',
    default: 'user',
    privileged: 'admin',
    editors: 'editor,admin'
  }
}
