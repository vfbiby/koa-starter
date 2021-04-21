const Koa = require('koa');
const app = new Koa();

app.use((ctx:any) => {
  ctx.body = 'Hello';
});

app.listen(3003);
