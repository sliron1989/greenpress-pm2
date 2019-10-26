const { execSync } = require('child_process')
const apps = require('./apps')

execSync('cd auth && npm install')
execSync('cd secrets && npm install')
execSync('cd content && npm install')

execSync('cd assets && npm install')

execSync('cd admin && npm install && npm run build', { env: { ...process.env, ...apps.admin.env_production } })

execSync('cd blog-front && npm install')
