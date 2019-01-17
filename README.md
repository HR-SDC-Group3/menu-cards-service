# Project Name

> An implementation of a React menu preview component based on OpenTable's individual item restaurants.

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Crud Operations](#crudoperations)

## Usage

> In the root directory, run `npm install` to download all node-modules from package.json.
> In a terminal window, run `mongod` to start MongoDB. 
> In another terminal, run `npm run seedDB` to add sample data to MongoDB.
> Run `npm run react-dev` to launch webpack.
> In another terminal window, run `npm startdev` to launch the server with nodemon.

> Navigate to `http://localhost:3001/restaurants/70/` to preview component.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Crud Operations

CREATE
- HTTP request method: POST
- Endpoint: /api/restaurants/:id/menu
- Required Parameters: restaurant id 
- Body: bulk insert of all menus for a given restaurant. 
- Expected Output: retrieves all menu cards for an existing restaurant 

READ
- HTTP request method: GET
- Endpoint: /api/restaurants/:id/menu
- Required Parameters: restaurant id 
- Expected Output: retrieves all menu cards for an existing restaurant 

UPDATE
- HTTP request method: PATCH
- Endpoint: /api/restaurants/:id/menu
- Required Parameters: restaurant id
- Body: single menu to be added to an array of menu cards for a given restaurant. 
- Expected Output: retrieves all menu cards for an existing restaurant 

DELETE
- HTTP request method: DELETE
- Endpoint: /api/restaurants/:id/menu
- Required Parameters: id
- Body: condition for identifying the menu card to be deleted 
- { name: "Lunch" }
- Expected Output: retrieves all menu cards for an existing restaurant 

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Creating database and tables in Postgres

From the terminal: 

postgres --version 

createdb FEC

psql FEC

psql -U edwu -d FEC -a -f schema.sql

\copy restaurants(restaurantName) FROM './restaurants.csv' DELIMITER ',' CSV HEADER;
\copy cards(name, footnote, restaurant_id) FROM './cards.csv' DELIMITER ',' CSV HEADER;
\copy sections(name, description, card_id) FROM './sections.csv' DELIMITER ',' CSV HEADER;
\copy items(name, description, price, section_id) FROM './items.csv' DELIMITER ',' CSV HEADER;
\copy addOns(name, price, item_id) FROM './addOns.csv' DELIMITER ',' CSV HEADER;

dropdb <DBNAME>

select count(*) from restaurants;

\timing
\list
\dt 
\dt <table>

\q
