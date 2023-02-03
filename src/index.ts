//@ts-ignore
import yahooFinance from 'yahoo-finance2';

const sembol = 'TSLA';
interface HistoricalRowHistory {
  [key: string]: any;
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  adjClose?: number;
  volume: number;
}
const queryOptions = { period1: '2023-01-01' };
const result = await yahooFinance.historical(sembol, queryOptions);
result.forEach((fiyat : HistoricalRowHistory) => {
  console.log('high :>> ', fiyat.high);
  console.log('low :>> ', fiyat.low);
});