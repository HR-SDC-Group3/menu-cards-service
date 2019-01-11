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

//////////////////////////
// Dummy Data Generator //
//////////////////////////

var NUM_OF_RECORDS = 10000000

const wstream = fs.createWriteStream(path.join(__dirname, '/data.csv'), { flags: 'w' });
let i = 0;

const writeData = () => {

  let proceed = true; 
  
  while (i < NUM_OF_RECORDS && proceed) {
    var addOns = []; 
    for (var j = 0; j < getRandomInt(2); j++) {
      addOns.push({
        name: faker.lorem.words(),
        price: faker.commerce.price(),
      })
    }
    
    var items = [];
    for (var k = 0; k < getRandomInt(6); k++) {
      items.push({
        name: faker.lorem.words(),
        description: faker.lorem.sentence(),
        price: faker.commerce.price(),
        addOns: addOns,
      })
    }
      
    var sections = [];
    for (var l = 0; l < getRandomInt(5); l++) {
      sections.push({
        name: faker.lorem.words(),
        description: faker.lorem.sentence(),
        items: items,
      })
    }
      
    var cards = [];
    for (var m =0; m < getRandomInt(5); m++) {
      cards.push({
        name: getRandomCard(),
        footnote: faker.lorem.words(),
        sections: sections,
      })
    }
      
    var entry = {
      _id: i, 
      cards: cards,
    }

    proceed = wstream.write(JSON.stringify(entry) + '\n');
    i ++;

  }

  if (!proceed) {
    wstream.once('drain', () => {
      writeData();
    });
  }

}

writeData();
