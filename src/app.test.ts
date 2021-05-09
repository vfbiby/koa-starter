import { expect, should as registerShould } from 'chai';
import request from 'supertest';
import app from './app';

registerShould();

it('Hello world works', async () => {
    const response = await request(app.callback()).get('/');
    expect(response.status).to.equal(200);
    response.text.should.to.eq('Hello World!');
});
