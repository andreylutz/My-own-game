const express = require('express');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
// const signUpCheck = require('../middleware/authUser');
// const authChecker = require('../middleware/authChecker');

const FileStore = sessionFileStore(session);

// файловое хранилище
const config = (app) => {
  // eslint-disable-next-line no-undef
  app.use(express.urlencoded({ extended: true }));
  const publicPath = path.resolve(__dirname, '..', 'public');
  app.use(express.static(publicPath));
  app.use(express.json());
  app.use(cookieParser());
  app.use(morgan('dev'));
  app.use(cors());

  // eslint-disable-next-line no-undef

  app.use(cookieParser());
  app.use(session({
    key: 'user_uid',
    secret: 'dirtyharry',
    store: new FileStore({ logFn() { } }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000 * 60 * 60 * 12,
      httpOnly: true,
    },
  }));
};
module.exports = config;
