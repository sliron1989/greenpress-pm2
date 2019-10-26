# GreenPress platform

[![Codeship Status for greenpress/greenpress-pm2](https://app.codeship.com/projects/bc638d20-aec1-0137-27f6-0e5196de25c6/status?branch=master)](https://app.codeship.com/projects/362577)

A PM2 configuration for running greenpress with just one press<br>
For development and production environments.

## Main Features
- SSR frontend
- content service
- authentication & users service
- reading data from database

## Dependencies
- Node.js
- npm OR yarn
- MongoDB

## Install
```sh
$ npm run sync-modules // first time run only
$ npm install
```


## Initiate basic information
This command will inject basic data in database, such as posts, menus, and admin user.

```sh
$ npm run init
```

## Launch Dev
```sh
$ npm run dev
```


## Launch Production
```sh
$ npm start
```


## Future development
- initial data insert to databases (admin user + main menu + demo category + demo post)
- admin panel
- comments
- choose and replace themes via panel
- dockerizing all services
- nginx
- support social login via auth-service
