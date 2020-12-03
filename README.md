# React, redux, redux-saga and router boilerplate

![CI build](https://github.com/stanimirgeorgiev/react-redux-saga-router-template/workflows/CI%20build/badge.svg)

This repo is a :construction: :construction: :construction: `permanent work in progress` :construction: :construction: :construction: which aims to create a repository with the most recent packages and technologies of the react environment that will allow the developer to quickly start a **production ready** [SPA](https://en.wikipedia.org/wiki/Single-page_application) frontend react app.

## General information

This is a boilerplate setup which allows the user to start as quick as possible the development of react application. Technology list is an optimum solution to have the app working.

 <details>
 <summary>more about technologies</summary>
<blockquote>
The repo includes following technologies:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux saga middleware](https://redux-saga.js.org/)
- [React router](https://reactrouter.com/)

For styling:

- [PostCSS](https://postcss.org/)

For building:

- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)

For linting:

- [Eslint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)

For testing:

- [Jest](https://jestjs.io/en/)

All of the packages have their versions set to `latest` and thus the project could be broken on major braking changes to any of the packages. The responsibility of updating is personal of the user and the CI build process should be used as indicator to verify that everything is working (compiling, building and visualizing). When using this template to create a production ready packages the versioning of libraries must be changed to fixed versioning using of one of the [npm versioning ](https://docs.npmjs.com/about-semantic-versioning).

</blockquote>
</details>

## Project scripts

To start the project:

`npm install && npm start`

<details>
<summary>more about start</summary>
<blockquote>
 Every time the project is started there is a possibility for a new package to be with a new version and thus to prevent the compiling and using of the project. The <code>latest</code> approach is used to spot problems with new versions of packages as quickly as possible and to fix them. The main maintenance task of the project is to be compilable and usable. Adding new technologies or removing them should be considered after assessing all of the pros and cons.
</blockquote>
</details>

To run all tests:

`npm test`

<details>
<summary>more about tests</summary>
<blockquote>
 The tests should cover all of the repository files that must be tested. The goal is to achieve above 80% test coverage. Groups of files that will be excluded from testing are:
- Action creators
</blockquote>
</details>

To build the production packages use:

`npm run build`

<details>
<summary>more about build</summary>
<blockquote>
 The build build script will create a production packages in the <code>build</code> folder. The packages are minified and obfuscated to reduce the overall size.
</blockquote>
</details>

To lint the project files use:

`npm run lint`

<details>
<summary>more about linting</summary>
<blockquote>
 Currently the project include javascript linting (eslint) and css linting (stylelint). All rules of the eslint are in the <code>config/eslint</code> folder.
</blockquote>
</details>

## Project structure

Configurations for the webpack, eslint, babel, sylelint, test are in `config` folder.

All project files are in the `src` folder. The approach of this project is to utilize the [redux ducks pattern](https://medium.com/@matthew.holman/what-is-redux-ducks-46bcb1ad04b7) over modules and use it throughout the application.

<details>
<summary>more about src</summary>
<blockquote>
The file <code>index.js</code> is the entry point for the application and <code>index.tpl.html</code> is the template used by webpack to bundle and create the final <code>index.html</code>.
</blockquote>
</details>

The `.vscode` folder is for the developers who use [VS Code](https://code.visualstudio.com/) to debug their code inside the VS Code IDE.

For the remote REST api services we use [{JSON} Placeholder](https://jsonplaceholder.typicode.com) :heart:

## Developing the app

All files of a single view (actions, reducers, sagas, api, constants, views etc.) should be placed inside a single folder. The folder is called a `duck` :duck:.

<details>
<summary>more about duck</summary>
<blockquote>
 In order to add a new view to the project there should be a particular pattern that should be followed. All the files should export their main activities into the <code>index.js</code> which should be at the root of the :duck:

```javascript
import React from 'react';
import { Route } from 'react-router-dom';

import { TasksList } from './views/tasks-list';
import { fetchTasksData } from './sagas/fetch-tasks-saga';
import { tasks } from './reducers/tasks-reducer';
import { tasksActions } from './actions/tasks-actions';
import { tasksListRoute } from './constants/routes';

export default {
  component: TasksList,
  sagas: [fetchTasksData],
  reducer: tasks,
  actions: tasksActions,
  path: tasksListRoute,
  route: () => (
    <Route exact path={tasksListRoute}>
      <TasksList />
    </Route>
  ),
};
```

The <code>index.js</code> then <code>export default</code> an object with particular structure that holds all resources of the duck. This export is then reexported with name in the <code>app-loader.js</code>. The name of the reexport is the same as the name of the duck (in camelCase) and this name will be used as the brach name of the redux store where the state of the duck will reside.

</blockquote>
</details>

## Motivation

To have a "plugin" like structure which will leave as little as possible if view is deleted

<details>
<summary>more about motivation</summary>
<blockquote>
That pattern will allow the developer to quickly create a new view in one space, following one design patterns and not having to browse throughout numerous folders to add/edit actions or reducers or something else. Using this pattern reduce the 'time to wondering' of the developer where exactly to put something :smile:. It should also lower the file sizes.
</blockquote>
</details>

## Final words

Using the duck pattern is not mandatory in order to use the project itself. Everything inside the `src` folder could be deleted and the only files that needs to be edited rather then deleted are `index.js` and `index.tpl.html`

The developer is free to change everything and use it :smile: :gift:
