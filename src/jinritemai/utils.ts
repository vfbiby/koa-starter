import dateformat from 'dateformat';

export function dateToString(dateTime: Date) {
  return dateformat(dateTime, 'yyyy-mm-dd HH:MM:ss');
}

export function sortToJsonStr(json: object) {
  return JSON.stringify(json, Object.keys(json).sort());
}

export function dateToSecond(datetime: Date) {
  return Math.floor(datetime.getTime() / 1000);
}
