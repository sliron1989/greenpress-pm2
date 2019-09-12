# GreenPress platform

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
