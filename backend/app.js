require('@babel/register');
const express = require('express');
const config = require('./config/config');

const indexRouter = require('./routes/index.routes');
const authRouter = require('./routes/auth.routes');
const partyRouter = require('./routes/party.routes');
const regRouter = require('./routes/reg.routes');
const logoutRouter = require('./routes/logout.routes');

const app = express();
config(app);

const PORT = process.env.PORT || 3000;

app.locals.count = 0;
app.use('/logout', logoutRouter);
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/party', partyRouter);
app.use('/registrate', regRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
