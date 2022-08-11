import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { readdirSync } from 'fs';
import { showMessage } from './controllers/auth';

const morgan = require('morgan');
require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log('DB error: ', err));

// middlewares
app.use(cors());
app.use(morgan('dev'));

// routes middleware
readdirSync('./routes').map((route) => {
  return app.use('/api', require(`./routes/${route}`));
});

const mw = (req, res, next) => {
  // old way of doing it
  console.log('md applied');
  next();
};

// routes
app.get('/', mw, showMessage);

app.listen(process.env.PORT || 8000);
