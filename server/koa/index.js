const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const serve = require('koa-static');

const db = require('./db')
const app = new Koa();
const router = require('./router.js');


app
  .use(logger())
  .use(serve('../../app'))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000);
