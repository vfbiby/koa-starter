import request from 'supertest';
import app from './app';

it('Hello world works', async () => {
    const response = await request(app.callback()).get('/');
    expect(response.status).to.equal(200);
    response.text.should.to.eq('Hello World!');
});
