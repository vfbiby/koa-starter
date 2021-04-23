const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const usersRouter = new Router({ prefix: '/users' });

const auth = async (ctx: any, next: any) => {
  if (ctx.url !== '/users') {
    ctx.throw(401);
  }
  await next();
};

router.get('/', auth, async (ctx: any) => {
  ctx.body = 'index page';
});

usersRouter.get('/', auth, async (ctx: any) => {
  ctx.body = 'this user list';
});

usersRouter.get('/:id', auth, async (ctx: any) => {
  ctx.body = `this is user ${ctx.params.id}`;
});

app.use(router.routes());
app.use(usersRouter.routes());
app.listen(3003);
