
\c FEC;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  restaurantName VARCHAR NOT NULL
);

CREATE TABLE cards (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  footnote VARCHAR NOT NULL, 
  restaurant_id INTEGER NOT NULL, 
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE sections (
  id SERIAL PRIMARY KEY, 
  name VARCHAR NOT NULL, 
  description VARCHAR NOT NULL, 
  card_id INTEGER NOT NULL, 
  FOREIGN KEY (card_id) REFERENCES cards(id)
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY, 
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL, 
  price INTEGER NOT NULL, 
  section_id INTEGER NOT NULL, 
  FOREIGN KEY (section_id) REFERENCES sections(id)
);

CREATE TABLE addOns (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL, 
  price INTEGER NOT NULL,  
  item_id INTEGER NOT NULL, 
  FOREIGN KEY (item_id) REFERENCES items(id)
);
