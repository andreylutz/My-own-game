const questionsRouter = require('express').Router();
const { Question } = require('../db/models');
const { Answer } = require('../db/models');

// async function addParty(user, title, location, startAt, uid) {
//   const createdGame = await Game.create({
//     title,
//     location,
//     startAt,
//     user_id: uid,

//   });
//   await createdGame.save();
// }

questionsRouter.get('/', async (req, res) => {

  const questions = await Question.findAll();
  // const answer = await Answer.findAll();

  res.json({questions: questions});
});

// router.get('/new', (req, res) => {
//   res.end(html);
// });

// router.get('/edit/:id', async (req, res) => {
//   const partyId = req.params.id;
//   const party = await Party.findOne({

//     where: {
//       id: partyId,
//     },
//   });
//   res.end(html);
// });
// // добавление карточки
// router.post('/', async (req, res) => {
//   const { title, location, startAt } = req.body;
//   const uid = req.session.user.id;
//   const { user } = req.session.user;
//   try {
//     console.log(title);
//     await addParty(user, title, location, startAt, uid);
//     res.json({
//       success: true,
//     });
//   } catch (er) {
//     res.json({
//       success: false,
//       erMsg: er.message,
//     });
//   }
// });
// // изменение карточки
// // router.post('/edit/:id', async (req, res) => {
// //   const party = await Party.findByPk(req.params.id);
// //   const { user } = req.session;
// //   const {
// //     title, location, startAt,
// //   } = req.body;
// //   const item = await Party.update({
// //     user_id: user.id,
// //     title,
// //     location,
// //     startAt,
// //   }, { where: { id: party.id } });
// //   const remove = React.createElement(PartyList, {
// //     title,
// //     location,
// //     startAt,
// //   });
// //   res.redirect('/party');
// // });
// // // удаление карточки
// // router.delete('/', async (req, res) => {
// //   const { id } = req.body;
// //   try {
// //     await Party.destroy({
// //       where: { id },
// //     });
// //     res.json({
// //       success: true,
// //     });
// //   } catch (er) {
// //     res.json({
// //       success: false,
// //       erMsg: er.message,
// //     });
// //   }
// // });

module.exports = questionsRouter;
