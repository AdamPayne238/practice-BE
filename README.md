Node Express API from Scratch (VS-Code)

# Setup
Run ‘git init’ =creates .git file so you can connect to a GitHub repo 
Run ‘npm init -y’ = creates a package.json file
Run npx gitignore node = creates a gitignore
Run npm i express helmet knex sqlite3 = install dependencies
Run npm I nodemon -D = install dev dependency

Initialize knex for our project: `npx knex init` = creates knexfile.js

# Scripts
“start”: “node index.js”gi
“server”: “nodemon index.js”
"testing": "

#  Migrations
Running a migration should create a .db3 file in your vs code

Migrations are a way to record changes to the database schema.
** Its like git, for the database structure **
** EVERY CHANGE TO THE DATABASE SCHEMA (structure) MUST BE DONE WITH A NEW MIGRATION **

// if you install knex globally, you no longer need to use npx. You can use knex migrate:up without npx before
Optionally install knex globally on your system: `npm i -g knex` or `yarn global add knex`


Create a migration:  ‘npx knex migrate:make name’ = creates a table 

Run a migration: `npx knex migrate:up` = run one migration up

Undo last migration:`npx knex migrate:down` = run one migration down

Update database to latest changes/migrations: `npx knex migrate:latest` = all pending migrations run

Undo multiple migrations that ran together: `npx knex migrate: rollback`

# Seeding
npx knex seed:make 00-name
npx knex seed:run

# Development Database
knex migrate:latest --env development

# Testing Database
knex migrate:latest --env test