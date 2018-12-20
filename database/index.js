const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/menus');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('+++ Connected to Menus DB +++');
});

const menuSchema = new mongoose.Schema({
  _id: 'Number',
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
