const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models/index');

function sendLoginPage(res, options) {

  res.end(html);
}

authRouter.get('/', (req, res) => {
  // const { user } = req.session.user;
  sendLoginPage(res);
});

// POST создать сессию (login, вход)
authRouter.post('/', async (req, res) => {
  let user;
  const { login, password } = req.body;
  try {
    user = await User.findOne({
      where: { login },
    });
  } catch (error) {
    sendLoginPage(res, { error: 'Server error' });
    return;
  }

  if (!user) {
    sendLoginPage(res, { error: 'Error: user does not exist. You should register first.' });
    return;
  }

  let isSame;
  try {
    isSame = await bcrypt.compare(password, user.password);
  } catch (error) {
    sendLoginPage(res, { error: 'Server error 2' });
    return;
  }

  if (!isSame) {
    sendLoginPage(res, { error: 'Error: password or login is incorrect' });
    return;
  }
  req.session.user = user; // Логин, создание сессии
  res.redirect('/');
  sendLoginPage(res, { error: 'Cool! You were verified successfully' });
});

module.exports = authRouter;
