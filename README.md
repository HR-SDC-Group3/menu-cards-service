# Project Name

Local version of implementation of a React menu preview component based on OpenTable's individual item restaurants. Built with React, Express, MongoDB, and later deployed to AWS EC2 instances with Redis and Nginx. Database implementation using Postgres used during database benchmarking phase (query speeds on both dbs compared after loading 10 million records). 

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Crud Operations](#crudoperations)

## Usage

Dependencies
- In root directory, run `npm install` to download all node-modules from package.json.

Database setup 
- In terminal window, run `mongod` to start MongoDB (should be installed locally)
- In another terminal, run `npm run generateData`, and then `npm run seedDB` to seed 10 record sample data to MongoDB. Can manually change sample data size in ./mongo_database/dummydatagenerator.js 

Launch in browser
- Run `npm run react-dev` to launch webpack.
- In another terminal window, run `npm startdev` to launch the server with nodemon.
- Navigate to `http://localhost:3001/restaurants/1/` to preview component.

## Requirements

- Node 6.13.0
- MongoDB

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

