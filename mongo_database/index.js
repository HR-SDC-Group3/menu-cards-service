const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('+++ Connected to FEC DB +++');
});

const menuSchema = new mongoose.Schema({
  _id: 'Number',
  restaurantName: 'String',
  cards: [
    {
      name: 'String',
      footnote: 'String',
      sections: [
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

// -------- database queries -------- //

const insertAll = (id, payload, cb) => {
  var conditions = { _id: id };
  var newMenu = payload;
  Menu.findOneAndReplace(conditions, newMenu, (err, menu) => {
    if (err) console.error(err);

    console.log('+++Inserting menu into DB: ', menu);
    cb(menu);
  })  
}
``
const retrieveAll = (id, cb) => {
  Menu.find({ _id: id }, (err, menu) => {
    if (err) console.error(err);

    console.log('+++Retrieving menu from DB: ', menu);
    cb(menu);
  });
};

const addOne = (id, payload, cb) => {
  var conditions = { _id: id };
  var menuCard = payload;
  Menu.findOneAndUpdate(conditions, 
    { $push: { cards: menuCard }}, 
    (err, menu) => {
    if (err) console.error(err);

    console.log('+++Updating menu in DB: ', menu);
    cb(menu);
  })
}

const deleteOne = (id, payload, cb) => {
  var conditions = { _id: id };
  var menuCardName = payload;
  Menu.findOneAndUpdate(conditions, 
    { $pull: { cards: menuCardName }}, 
    (err, menu) => {
    if (err) console.error(err);

    console.log('+++Updating menu in DB: ', menu);
    cb(menu);
  })
}

Menu.find({_id: 1 }, (err, results) => {
  console.log(results);
})

module.exports = {
  insertAll, 
  retrieveAll,
  addOne,
  deleteOne,
};