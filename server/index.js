const express= require('express');
const mongoose = require('mongoose');
const rental = require('./models/rental');
const FakeDb = require('./fake-db');
const  config = require('./config/dev');

const  rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(()=> {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

const app = express();
app.use('/api/v1/rentals', rentalRoutes);

app.get('/rentals', function (req, res) {
  res.json({'success': true});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log('I am running')
});


