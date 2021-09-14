const express = require('express');
const Product = require('./models/Product');
const User = require('./models/User');
require('colors');
const cors = require('cors');
const app = express();

app.use(cors());

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

Product.sequelize
  .sync()
  .then(() => {})
  .catch((err) => console.log(err));

User.sequelize
  .sync()
  .then(() => {})
  .catch((err) => console.log(err));

const productRoute = require('./routes/productRoute');
const authRoutes = require('./routes/authRoutes');

// Mount routers
app.use('/product', productRoute);
app.use('/auth', authRoutes);

app.listen(5000);
console.log('Listening to port 5000...'.brightCyan.bold);
