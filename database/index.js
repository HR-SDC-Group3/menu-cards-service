const mongoose = require('mongoose');
const sampleData = require('./sampleData.js');

mongoose.connect('mongodb://localhost/menus');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('+++ Connected to Menus DB +++');
});

const menuSchema = new mongoose.Schema({
  restName: 'String',
  cards: [
    {
      cardName: 'String',
      cardNotes: 'String',
      categories: [
        {
          categName: 'String',
          categDes: 'String',
          items: [
            {
              itemName: 'String',
              itemDes: 'String',
              itemPrice: 'String',
              addOns: [
                {
                  addOnName: 'String',
                  addOnPrice: 'String',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const Menu = mongoose.model('Menu', menuSchema);

const rest1 = new Menu(sampleData);
rest1.save();
