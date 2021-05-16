import { JrtmClient } from './client';
import { dateToSecond } from './utils';

const appKey = '6959524271349777951';
const appSecret = 'cdc0f953-fa9c-4fb0-a4eb-36308291b6ea';
const accessToken = 'b9e8e8e3-6654-450d-8c1e-9234da785141';
const client = new JrtmClient(appKey, appSecret, accessToken);

describe('client', () => {
  it('searchOrders', async () => {
    const data = await client.searchOrders({
      page: 0,
      size: 10,
      create_time_start: dateToSecond(new Date('2021-05-10')),
    });
    //console.log(JSON.stringify(data));
    data.should.include.keys('data');
    data.data.shop_order_list.should.have.lengthOf.above(0);

    expect(data.err_no).to.eq(0);
    expect(data.message).to.eq('success');
  });
});
