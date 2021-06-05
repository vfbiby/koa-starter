import { JrtmClient } from './client';
import { dateToSecond } from './utils';

describe('client', () => {
  let appKey: string, appSecret: string, accessToken: string;

  beforeEach(() => {
    appKey = process.env.APPKEY ? process.env.APPKEY : '';
    appSecret = process.env.APPSECRET ? process.env.APPSECRET : '';
    accessToken = process.env.ACCESSTOKEN ? process.env.ACCESSTOKEN : '';
  });

  describe('success', () => {
    it.skip('should searchOrders with 3 params at least', async () => {
      const client = new JrtmClient(appKey, appSecret, accessToken);
      const data = await client.searchOrders({
        page: 0,
        size: 10,
        create_time_start: dateToSecond(new Date('2021-05-10')),
      });
      //console.log(JSON.stringify(data));
      data.should.include.keys('data');
      data.data.shop_order_list.should.have.lengthOf.above(0);
      data.err_no.should.to.eq(0);
      data.message.should.to.eq('success');
    });
  });

  describe('failure', () => {
    it('should throw error while app_key is not valid', async () => {
      const inValidAppKey = '6959524271349777952';
      appKey = inValidAppKey;
      const client = new JrtmClient(inValidAppKey, appSecret, accessToken);
      const data = await client.searchOrders({
        page: 0,
        size: 10,
        create_time_start: dateToSecond(new Date('2021-05-10')),
      });
      //console.log(JSON.stringify(data));
      data.should.not.include.keys('data');
      data.err_no.should.to.eq(30001);
      data.message.should.to.eq('认证失败，app_key不存在');
    });
  });
});
