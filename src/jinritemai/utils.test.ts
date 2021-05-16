import { dateToSecond, dateToString, sortToJsonStr } from './utils';

describe('Dateformat', () => {
  it('should format a date with yyyy-mm-dd HH:MM:ss', () => {
    const t = dateToString(new Date('2021-05-12T13:13:58.000Z'));
    t.should.eq('2021-05-12 21:13:58');
  });

  it('should sort and convert json to jsonStr', function () {
    const json = { b: 3, c: 2, a: 1 };
    const sortedToJsonStr = sortToJsonStr(json);
    sortedToJsonStr.should.eq('{"a":1,"b":3,"c":2}');
  });

  it('should convert date to timestamp in seconds precision', function () {
    const now = new Date('2021-05-16');
    dateToSecond(now).should.eq(1621123200);
  });

  it('should include keys', function () {
    const data = {
      "data": {
        c: 3,
        a: 1,
        b: 2,
      },
    };
    data.should.include.keys('data');
  });
});
