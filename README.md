# trello like app with create-react-app

> Example on using create-react-app with a Node Express Backend

## Install

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn
cd client
yarn
```

Then, inside the `/client` folder, rename the `default.env`file to `.env`and change the `REACT_APP_DEFAULT_USR` to your user.

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

The Express server is running on **localhost:5000**

## Description

This is a trello based simple dashboard bootstraped with create-react-app (from Eureka repo) and using a NodeJs server with Express.

It uses a basic drag and drop to move cards between lists

<a href="https://imgflip.com/gif/2a7m03"><img src="https://i.imgflip.com/2a7m03.gif" title="made at imgflip.com"/></a>

This drag is basic because I didnt use any library and had short time to finish the project, but it does the job

# Technologies

## Frontend

- [create-react-app Eureka version](https://github.com/eurekalabs-io/react-test-seed)
- [redux](https://redux.js.org/introduction)
- [axios](https://github.com/axios/axios)
- [reactstrap](https://reactstrap.github.io/)
- [jest](https://facebook.github.io/jest/)
- [enzyme](https://github.com/airbnb/enzyme)

## Backend

- [nodejs LTS](https://nodejs.org/)
- [express](http://expressjs.com/es/)
