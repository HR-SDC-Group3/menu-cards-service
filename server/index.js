const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./../database/index.js');

const app = express();

// -------- middleware -------- //
app.use('/restaurants/:id/', express.static('client/dist/'));
app.use(bodyParser());
app.use(morgan('tiny'));

// -------- crud -------- //
app.get('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- SERVER RECIEVING GET REQ TO ID: ', req.params.id);
  db.retrieveAll(req.params.id, (menu) => {
    res.send(menu);
  });
});

// -------- server -------- //
const port = 3001;
app.listen(port, () => console.log(`Now listening on port ${port}!`));
