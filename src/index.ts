const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const usersRouter = new Router({ prefix: '/users' });

router.get('/', async (ctx: any) => {
  ctx.body = 'index page';
});

usersRouter.get('/', async (ctx: any) => {
  ctx.body = 'this user list';
});

usersRouter.get('/:id', async (ctx: any) => {
  ctx.body = `this is user ${ctx.params.id}`;
});

app.use(router.routes());
app.use(usersRouter.routes());
app.listen(3003);
