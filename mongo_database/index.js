const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  poolSize: 10,
}

mongoose.connect('mongodb://18.222.227.22:27017/FEC', options);

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

const retrieveAllById = (id, cb) => {
  Menu.find({ _id: id }, (err, menu) => {
    if (err) console.error(err);
    console.log('+++Retrieving menu from DB: ', menu);
    cb(menu);
  });
};

const retrieveAllByRestaurant = (id, cb) => {
  var filter = { restaurantName: "restaurant" + id.toString() }
  Menu.find(filter, (err, menu) => {
    if (err) console.error(err);
    console.log('+++Retrieving menu from DB: ', menu);
    cb(menu);
  }).lean();
}

const insertAll = (id, payload, cb) => {
  // var conditions = { _id: id };
  var filter = { restaurantName: "restaurant" + id.toString() }
  var newMenu = payload;
  Menu.findOneAndReplace(filter, newMenu, (err, menu) => {
    if (err) console.error(err);
    console.log('+++Inserting menu into DB: ', menu);
    cb(menu);
  })  
}

const addOne = (id, payload, cb) => {
  // var conditions = { _id: id };
  var filter = { restaurantName: "restaurant" + id.toString() }
  var menuCard = payload;
  Menu.findOneAndUpdate(filter, 
    { $push: { cards: menuCard }}, 
    (err, menu) => {
    if (err) console.error(err);

    console.log('+++Updating menu in DB: ', menu);
    cb(menu);
  })
}

const deleteOne = (id, payload, cb) => {
  // var conditions = { _id: id };
  var filter = { restaurantName: "restaurant" + id.toString() }
  var menuCardName = payload;
  Menu.findOneAndUpdate(filter, 
    { $pull: { cards: menuCardName }}, 
    (err, menu) => {
    if (err) console.error(err);

    console.log('+++Updating menu in DB: ', menu);
    cb(menu);
  })
}

module.exports = {
  retrieveAllById,
  retrieveAllByRestaurant,
  insertAll, 
  addOne,
  deleteOne,
};

mongoose.connection.close()