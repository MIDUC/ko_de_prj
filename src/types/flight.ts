export interface Flight {
  id: string;
  airlineLogo: string;
  airlineName: string;
  departTime: string; // "15:35"
  arriveTime: string; // "17:50"
  duration: string; // "2g 15p"
  price: number;
  currency: string;
  stops: number; // 0 = bay thẳng
  flightNumber: string;
}
