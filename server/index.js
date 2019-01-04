const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./../database/index.js');

const app = express();

// -------- middleware -------- //
app.use('/restaurants/:id/', express.static('client/dist/'));
app.use(morgan('tiny'));
app.use(cors());

// -------- crud -------- //
app.get('/api/restaurants/:id/menu', (req, res) => {
  console.log('--- Server receiving get reqest to id: ', req.params.id);
  db.retrieveAll(req.params.id, (menu) => {
    res.send(menu);
  });
});

// -------- server -------- //
const port = 3001;
app.listen(port, () => console.log(`Now listening on port ${port}!`));
