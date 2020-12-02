## **React, redux, redux-saga and routing boilerplate**

## General information

This is a boilerplate setup which allows the user to start a quick development of react application with the following main technologies included:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux saga middleware](https://redux-saga.js.org/)
- [React router](https://reactrouter.com/)

The technologies used for the setup of the project includes:

- [Babel](https://babeljs.io/)
- [Eslint](https://eslint.org/)
- [Webpack](https://webpack.js.org/)

For testing the project the following testing lib is used:

- [Jest](https://jestjs.io/en/)

All of the packages have their versions set to `latest` and thus the project could be broken on major braking changes. The responsibility of updating is personal of the user and the CI build process should be used as indicator to verify that everything is working (compiling, building and visualization). The template packages must have fixed versioning if this template will be used in production builds.

## Configuration

To start the project use:

`npm install`

`npm start`

The test should be run by using:

`npm test`

To build the production build use:

`npm run build` - this is not yet implemented!

## Project structure

- Configuration for the webpack, eslint, babel is in `config` folder.

- All project files are in the `src` folder. The file `index.js` is the entry point for the application and `index.tpl.html` is the template used by webpack to bundle and create the final `index.html`.
- The output will be compiled in the `build` folder which is not included in the repository and should be recreated on every local build.

For the remote REST api services we use:
https://jsonplaceholder.typicode.com
