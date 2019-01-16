
\c FEC;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE menucard (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  footnote VARCHAR NOT NULL, 
  restaurant_id INTEGER NOT NULL, 
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE menusection (
  id SERIAL PRIMARY KEY, 
  description VARCHAR NOT NULL, 
  menucard_id INTEGER NOT NULL, 
  FOREIGN KEY (menucard_id) REFERENCES menucard(id)
)

CREATE TABLE item (
  name SERIAL PRIMARY KEY, 
  description VARCHAR NOT NULL, 
  price INTEGER NOT NULL, 
  menusection_id INTEGER NOT NULL, 
  FOREIGN KEY (menusection_id) REFERENCES menusection(id)
) 

CREATE addons (
  name SERIAL PRIMARY KEY, 
  price INTEGER NOT NULL, 
  item 
  
)

\d restaurants;
\d menucard;
