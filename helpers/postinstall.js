const { exec } = require('child_process')
const apps = require('./apps')

function execAsync (a, b) {
  return new Promise(((resolve, reject) => {
    console.log(a)
    exec(a, b || {}, err => err ? reject(err) : resolve())
  }))
}

Promise.all([
  execAsync('cd auth && npm install'),
  execAsync('cd secrets && npm install'),
  execAsync('cd content && npm install'),
  execAsync('cd assets && npm install'),

  execAsync('cd admin && npm install && npm run build', {
    maxBuffer: 1024 * 500,
    env: {
      ...process.env,
      ...apps.admin.env_production,
      NODE_ENV: 'development'
    }
  }),

  execAsync('cd blog-front && npm install', {
    maxBuffer: 1024 * 500 ,
    env: {
      ...process.env,
      ...apps.front.env_production,
    }
  })
])
  .then(() => console.log('done!'))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
