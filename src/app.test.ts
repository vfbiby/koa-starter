import { expect } from 'chai';
import request from 'supertest';
import app from './app';

it('Hello world works', async () => {
    const response = await request(app.callback()).get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Hello World!');
});
