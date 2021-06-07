import { JrtmClient } from './searchOrder';
import { dateToSecond } from './utils';

describe('搜索订单', () => {
  let appKey: string, appSecret: string, accessToken: string;

  beforeEach(() => {
    appKey = process.env.APPKEY ? process.env.APPKEY : '';
    appSecret = process.env.APPSECRET ? process.env.APPSECRET : '';
    accessToken = process.env.ACCESSTOKEN ? process.env.ACCESSTOKEN : '';
  });

  describe('成功的情况', () => {
    it('应该需要至少3个参数才能搜索订单', async () => {
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

  describe('失败的情况', () => {
    it('应该在app_key无效时抛出异常', async () => {
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
