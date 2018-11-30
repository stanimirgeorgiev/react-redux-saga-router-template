# Simple app for Teaching: React, Redux and Redux-Saga building simple app.
This is a simple test app which will implement some of the features included in React, Redux, Redux-Saga in one simple app.

The documentation for the react:
https://reactjs.org/docs/hello-world.html

The documentation for the redux:
https://redux.js.org

The documentation for the redux-saga:
https://redux-saga.js.org/docs/introduction

To start the project use:
1. npm install
2. npm start

Configuration for the webpack and webpack-dev-server is in config folder.

Index.js is the entry point for the app.
Index.tpl.html is the template used by webpack to bundle and create the final index.html page.

For the backend services we use:
https://jsonplaceholder.typicode.com

For components we are using Material UI lib:
https://material-ui.com - current project is not focused on the Material-UI.

Branches to the master:

 - development - this is a branch where every other branch is merged before merging to default.
 - eslint - implementation of the linting for the js files.
 - master - default branch where only fully completed functionality (releases) could be merged.
 - simple_react_view - simple react view without any implementation of redux, redux-saga and etc.
 - simple_redux - simple redux implementation developed on top of simple_react_view branch. Used controller view.
 - simple_redux_saga - simple redux-saga implementation on top of simple_redux branch. Used axios as fetching api and REST services of https://jsonplaceholder.typicode.com.
 
#### Linting is implemented using eslint package.
 For further configuration see eslint branch.

---
#### Routing is not implemented. 

---
#### Build process is not implemented. 

---
#### Test framework is not implemented.
