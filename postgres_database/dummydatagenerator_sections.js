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
// Sections Table //
///////////////////////

var NUM_OF_RECORDS = 50000000;
var NUM_OF_CARDS = 24999999;

const wstream = fs.createWriteStream(path.join(__dirname, '/sections.csv'), { flags: 'w' });
let i = 0;

const writeData = () => {

  let proceed = true; 
  
  while (i < NUM_OF_RECORDS && proceed) {
    
    var entry; 

    if(i === 0) {
      entry = `name, description, card_id`;
    } else {
      entry = `${faker.lorem.words()}, ${faker.lorem.sentence()}, ${getRandomInt(NUM_OF_CARDS)}`;
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