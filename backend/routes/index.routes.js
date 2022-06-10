/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const router = require('express').Router();

const ReactDOMServer = require('react-dom/server');
const { Game } = require('../db/models');
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  const { user } = req.session;
  // сортировка по времени проведения мероприятия
  const partys = await Game.findAll({
    order: [['startAt', 'DESC']],
  });
  
  const html = ReactDOMServer.renderToStaticMarkup(main);

  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
