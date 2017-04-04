## Environment setup 
-> install node js
-> install postgres
    - To use psql add it to the environment path 
    - user :  postgres ; password : admin
-> install git (use either rsa or assword auth)
-> install conenum (bash console on windows)
-> create the new react application using : npm init folder_name
-> install visual studio code (editor for javascript)

## server folder
- server
    - db
        - knex.js (initiates the knex configuration)
    - models
    - routes
        - auth.js
        - users.js
    - config.js
    - db.js
    - index.html (entry point of the application)
    - index.js (loads the index.html and the webpack configurations and the database, etc.)

## migrations folder: 
> contains files needed to initialize the database, it creates the tables and fills them
> it is used for knex
> to install knex use : npm install --global knex
> to run the initialization of the db : knex migrate:latest
> to rollback changes : knex rollback:latest

## client folder:
- client 
    - actions  (all the functions which can be call within a component), this action usualy pass data from component to reducers, they can also be used for redirection
    - components (all the components created by react)
        - App.js (the entry point of components) (the master page)
    - data (static data used directly by components)
    - reducers (return the new states to the loaded components), usualy each main component has a reducer related to it
    - utils (utilities)
    - index.js (entry point of the client side)
    - routes.js (contains the rooting logic of pages)
    - rootReducers (containes all the data postponned by the reducers)

## Others root files
- .babelrc (config for using babel)
- .eslintrc.json 
- knexfile.js (contains all the configuration of the database : password, name, etc.)
- webpack.config.dev.js (configuration for webpack)
    > contains the module to loaded
    > the entry point
    > the plugins


## to start the application 
- check that the database server is started
- install babel (npm install --save babel-cli babel-preset-node6 babel-preset-es2015)
- npm start run
