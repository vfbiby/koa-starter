const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', async (ctx: any) => {
  ctx.body = 'index page';
});

app.use(router.routes());
app.listen(3003);
