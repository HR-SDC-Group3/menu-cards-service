const faker = require('faker');
const fs = require('file-system');
const path = require('path');

//////////////////////
// Helper Functions //
//////////////////////

const getRandomInt = (max) => {
  return Math.ceil(Math.random() * Math.floor(max));
}

//////////////////////////
// Dummy Data Generator //
//////////////////////////

var NUM_OF_RECORDS = 10000000

const wstream = fs.createWriteStream(__dirname + '/sdc_dummydata.txt');
let i = 0;

const writeOne = () => {
  
  while (i < NUM_OF_RECORDS){
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
        name: faker.lorem.words(),
        footnote: faker.lorem.words(),
        sections: sections,
      })
    }
      
    var entry = {
      _id: i, 
      cards: cards,
    }
        
    if(!wstream.write(JSON.stringify(entry))) {
      return;
    }

    i++;
  }

  wstream.end(); 
}

wstream.on('drain', () => {
	writeOne();
});

writeOne();

