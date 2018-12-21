const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// -------- middleware -------- //
app.use('/restaurants/:id/', express.static('client/dist/'));
app.use(bodyParser());
app.use(morgan('tiny'));

// -------- crud -------- //
// app.get('/restaurants/:id', (req, res) => {
//   res.send('Hello World');
// });

// -------- server -------- //
const port = 3001;
app.listen(port, () => console.log(`Now listening on port ${port}!`));
