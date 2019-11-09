const { spawn, fork } = require('child_process')
const {mkdirSync} = require('fs');
const apps = require('./apps')
console.log('run mongo')
mkdirSync('db-data');
const mongo = spawn('mongod', ['--dbpath', './db-data'])

process.once('exit', () => mongo.kill())

mongo.stdout.on('data', data => {
  if (data.toString().includes('waiting for connections on port')) {
    console.log('db is running, start populate data')
    Promise.all([
      runServiceInit('content', apps.content.env),
      runServiceInit('auth', apps.auth.env)
    ]).then(() => {
      console.log('init data completed successfully!')
      process.exit(0)
    })
  }
})

function runServiceInit (service, env) {
  console.log('run', service)
  return new Promise(resolve => {
    const f = fork('./' + service + '/helpers/init.js', null, { env })

    f.on('close', () => {
      console.log(service, 'close')
      resolve()
    })
  })

}
