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

router.get('/', async (ctx: any) => {
  ctx.body = 'index page';
});

usersRouter.get('/', async (ctx: any) => {
  ctx.body = [{ name: 'linei' }, { name: 'hanmeimei' }];
});

usersRouter.post('/', async (ctx: any) => {
  ctx.body = { name: 'linei' };
});

usersRouter.get('/:id', async (ctx: any) => {
  ctx.body = { name: 'linei' };
});

usersRouter.put('/:id', async (ctx: any) => {
  ctx.body = { name: 'linei2' };
});

usersRouter.delete('/:id', async (ctx: any) => {
  ctx.status = 204;
});

app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());
app.listen(3003);
