var newrelic = require('newrelic');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const db = require('../mongo_database/index.js');
var cache = require('express-redis-cache')();
const app = express();

// -------- middleware -------- //
app.use('/restaurants/:id/', express.static('client/dist/'));
app.use(morgan('tiny'));
app.use(bodyParser())
app.use(cors());

// -------- crud -------- //

// app.get('/api/restaurants/:id/menu', (req, res) => {
//   console.log('--- Server receiving GET request to id: ', req.params.id);
//   db.retrieveAllById(req.params.id, (menu) => {
//     res.send(menu);
//   });
// });

app.get('/api/restaurants/:id/menu', cache.route(), (req, res) => {
  console.log('--- Server receiving GET request to restaurant: ', req.params.id);
  db.retrieveAllByRestaurant(req.params.id, (menu) => {
    res.send(menu);
  });
});

app.post('/api/restaurants/:id/menu', (req, res) => {
  console.log('---Server receiving POST request to id: ', req.params.id, 'with payload: ', req.body);
  db.insertAll(req.params.id, req.body, (menu) => {
    console.log(menu)
    res.send(menu);
  }) 
})

app.patch('/api/restaurants/:id/menu/', (req, res) => {
  console.log('---Server receiving PATCH request to id: ', req.params.id, 'with payload: ', req.body);
  db.addOne(req.params.id, req.body, (menu) => {
    console.log(menu)
    res.send(menu);
  })
})

app.delete('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- Server receiving DELETE request to id: ', req.params.id, 'with payload: ', req.body);
  db.deleteOne(req.params.id, req.body, (menu) => {
    res.send(menu);
  });
});

// -------- server -------- //
const port = 3001;
app.listen(port, () => console.log(`Now listening on port ${port}!`));
