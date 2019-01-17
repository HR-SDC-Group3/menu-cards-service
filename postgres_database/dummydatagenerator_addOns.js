const faker = require('faker');
const fs = require('file-system');
const path = require('path');

//////////////////////
// Helper Functions //
//////////////////////

const getRandomInt = (max) => {
  return Math.ceil(Math.random() * Math.floor(max));
}

const cards = ["Breakfast", "Lunch", "Dinner", "Brunch", "Prixfixe", "Set Menu"]

const getRandomCard = () => {
  return cards[Math.floor(Math.random() * cards.length)]
}

///////////////////////
// addOns Table //
///////////////////////

var NUM_OF_RECORDS = 10000000;
var NUM_OF_ITEMS = 199999999;

const wstream = fs.createWriteStream(path.join(__dirname, '/addOns.csv'), { flags: 'w' });
let i = 0;

const writeData = () => {

  let proceed = true; 
  
  while (i < NUM_OF_RECORDS && proceed) {
    
    var entry; 

    if(i === 0) {
      entry = `name, price, item_id`;
    } else {
      entry = `${faker.lorem.words()}, ${faker.commerce.price()}, ${getRandomInt(NUM_OF_ITEMS)}`;
    }

    proceed = wstream.write(`${entry} \n`);
    i ++;

  }

  if (!proceed) {
    wstream.once('drain', () => {
      writeData();
    });
  }
}

writeData();