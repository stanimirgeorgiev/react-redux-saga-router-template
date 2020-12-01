## **React, redux, redux-saga and routing boilerplate**

## General information

This is a boilerplate setup which allows the user to start a quick development of an application with the following main technologies included:

-   [React](https://reactjs.org/)
-   [Redux](https://redux.js.org/)
-   [Redux saga middleware](https://redux-saga.js.org/)
-   [React router](https://reactrouter.com/)

The technologies used for the setup of the project includes:

-   [Babel](https://babeljs.io/)
-   [Eslint](https://eslint.org/)
-   [Webpack](https://webpack.js.org/)

For testing the project is setup with the following testing libs:

-   [Chai](https://www.chaijs.com/)
-   [Enzyme](https://enzymejs.github.io/enzyme/?utm_source=next.36kr.com)
-   [Mocha](https://mochajs.org/)

All of the packages has their versions set to `latest` and thus the project could be broken on major braking changes. The responsibility of updating is personal of the user and the CI build process should be used as indicator if everything is working (compiling, building and visualization). The template should have fixed versioning if it will be use for production builds.

## Configuration

To start the project use:

`npm install`

`npm start`

The test should be run by using:

`npm test`

To build the production build use:

`npm run build`

## Project structure

-   Configuration for the webpack, eslint, babel is in `config` folder.

-   All project files are in the `src` folder. The file `index.js` is the entry point for the application and `index.tpl.html` is the template used by webpack to bundle and create the final `index.html`.
-   The output will be compiled in the `build` folder which is not included in the repository and should be recreated on every local build.

For the remote REST api services we use:
https://jsonplaceholder.typicode.com
