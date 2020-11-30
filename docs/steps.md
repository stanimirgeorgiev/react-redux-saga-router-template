## Main steps for creating the project.

Start from scratch.

-   Download install Node.js
-   create git repo
-   Create npm module: npm create
-   Added index.js

Starting bundling of all project dependencies.

Added external dependencies in package.json

-   `"react": latest`
-   `"redux: latest`
-   `"redux-saga": latest`
-   `"webpack": latest`
-   Add .gitignore file

Creating webpack configuration.

-   Add webpack.config.js and its requirements
-   Add webpack.dev-server.js and its requirements
-   Add start to package.json: "webpack-dev-server --progress --color --config webpack.dev-server.js"
-   Add index.tpl.html

## Creating the simple app structure and files.

Creating react view

-   Add folder structure
-   Add Added material-ui template of a simple chart
-   Changed the template to be a user's tasks overview view
-   Refactored the template so only local state is used for rendering
-   Refactored the template to use callbacks and controller view

Using redux state, actions and reducers

-   Use redux for global app state.
-   Plan the state
-   Create the reducer

## Creating a react template

-   use all latest packages
-   merge all branches (saga, eslint)
