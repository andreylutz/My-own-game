const regRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

regRouter.route('/')
  .post(async (req, res) => {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.send('Такой  уже зарегистрирован');
      res.redirect('/registrate');
    } else {
      const newUser = await User.create({
        login, password: await bcrypt.hash(password, 10),
      });
      req.session.user = newUser;
      res.end();
    }
  });

module.exports = regRouter;
