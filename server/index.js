const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const db = require('./../database/index.js');

const app = express();

// -------- middleware -------- //
app.use('/restaurants/:id/', express.static('client/dist/'));
app.use(morgan('tiny'));
app.use(bodyParser())
app.use(cors());

// -------- crud -------- //

app.post('/api/restaurants/:id/menu', (req, res) => {
  console.log('---Server receiving POST request to id: ', req.params.id, 'with payload: ', req.body);
  db.insertOne(req.params.id, req.body, (menu) => {
    console.log(menu)
    res.send(menu);
  }) 
})

app.get('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- Server receiving GET request to id: ', req.params.id);
  db.retrieveAll(req.params.id, (menu) => {
    res.send(menu);
  });
});

app.patch('/api/restaurants/:id/menu/', (req, res) => {
  console.log('---Server receiving PATCH request to id: ', req.params.id, 'with payload: ', req.body);
  db.updateOne(req.params.id, req.body, (menu) => {
    console.log(menu)
    res.send(menu);
  })
})

app.delete('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- Server receiving DELETE request to id: ', req.params.id);
  db.deleteOne(req.params.id, (menu) => {
    res.send(menu);
  });
});

// -------- server -------- //
const port = 3001;
app.listen(port, () => console.log(`Now listening on port ${port}!`));
