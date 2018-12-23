const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('+++ Connected to FEC DB +++');
});

// notes display at bottom of component, description display under name of component.
const menuSchema = new mongoose.Schema({
  _id: 'Number',
  cards: [
    {
      name: 'String',
      notes: 'String',
      categories: [
        {
          name: 'String',
          description: 'String',
          items: [
            {
              name: 'String',
              description: 'String',
              price: 'String',
              addOns: [
                {
                  name: 'String',
                  price: 'String',
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
