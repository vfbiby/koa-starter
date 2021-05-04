import app from './app';
import { expect } from "chai";
import sinon from 'sinon';

const mockListen = sinon.fake();
app.listen = mockListen;

afterEach(() => {
    sinon.restore();
});

it('Server works', async () => {
    require('./server');
    expect(mockListen.callCount).to.eq(1);
    expect(mockListen.calledWith(process.env.PORT || 3000)).to.be.true;
});
