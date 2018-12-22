const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('+++ Connected to Menus DB +++');
});

// notes display at bottom of component, des display under name.
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

const retrieveAll = (id, cb) => {
  Menu.find({ _id: id }, (err, menu) => {
    if (err) console.error(err);

    console.log('+++Retrieving menu from DB: ', menu);
    cb(menu);
  });
};

module.exports = {
  retrieveAll,
};
