const Koa = require('koa');
const app = new Koa();

app.use(async (ctx: any) => {
  if (ctx.url === '/user') {
    if (ctx.method === 'GET') {
      ctx.body = 'get to user!';
    } else {
      ctx.body = 'post to user!';
    }
  } else if (ctx.url.match(/\/users\/\w+/)) {
    const userId = ctx.url.match(/\/users\/(\w+)/)[1];
    ctx.body = `this is user ${userId}`;
  } else ctx.body = 'Hello';
});

app.listen(3003);
