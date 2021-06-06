import axios from 'axios';
import { dateToString, sortToJsonStr } from './utils';
import md5 from 'md5';

interface SearchOrderParams {
  page: number;
  size: number;
  create_time_start: number;
}

export class JrtmClient {
  constructor(
    public appKey: string,
    public appSecret: string,
    public accessToken: string
  ) {}

  async searchOrders(query: SearchOrderParams) {
    const httpClient = axios.create({
      baseURL: 'https://openapi-fxg.jinritemai.com',
    });
    const url = '/order/searchList';
    const method = 'order.searchList';
    const busiParamStr = sortToJsonStr(query);
    const timestamp = dateToString(new Date());
    const signStr = this.signParams(method, busiParamStr, timestamp);
    const requestParams = {
      app_key: this.appKey,
      access_token: this.accessToken,
      method: method,
      param_json: busiParamStr,
      timestamp: timestamp,
      v: '2',
      sign: signStr,
      sign_method: 'md5',
    };
    const response = await httpClient.get(url, { params: requestParams });
    return response.data;
    //return JSON.stringify(response.data);
  }

  signParams(
    method: string,
    busiParam: string,
    timestamp: string
  ) {
    const message = `${this.appSecret}app_key${this.appKey}method${method}param_json${busiParam}timestamp${timestamp}v2${this.appSecret}`;
    return md5(message);
  }
}
