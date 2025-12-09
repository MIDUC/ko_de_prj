// src/data/mock-flights.ts
import { Flight } from "@/types/flight";

export const MOCK_FLIGHTS: Flight[] = [
  {
    id: "VJ-101",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/d/dd/VietJet_Air_logo.svg/1200px-VietJet_Air_logo.svg.png", // Link logo demo
    airlineName: "VietJet Air",
    departTime: "15:35",
    arriveTime: "17:50",
    duration: "2g 15p",
    price: 110,
    currency: "US$",
    stops: 0,
    flightNumber: "VJ123",
  },
  {
    id: "VJ-102",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/d/dd/VietJet_Air_logo.svg/1200px-VietJet_Air_logo.svg.png",
    airlineName: "VietJet Air",
    departTime: "15:55",
    arriveTime: "18:10",
    duration: "2g 15p",
    price: 110,
    currency: "US$",
    stops: 0,
    flightNumber: "VJ456",
  },
  {
    id: "VN-205",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Vietnam_Airlines_Logo.svg/2560px-Vietnam_Airlines_Logo.svg.png",
    airlineName: "Vietnam Airlines",
    departTime: "16:00",
    arriveTime: "18:15",
    duration: "2g 15p",
    price: 122,
    currency: "US$",
    stops: 0,
    flightNumber: "VN205",
  },
  {
    id: "QH-302",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Bamboo_Airways_logo_2019.svg/1200px-Bamboo_Airways_logo_2019.svg.png",
    airlineName: "Bamboo Airways",
    departTime: "18:00",
    arriveTime: "20:15",
    duration: "2g 15p",
    price: 135,
    currency: "US$",
    stops: 0,
    flightNumber: "QH302",
  },
  {
    id: "VN-Stop",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Vietnam_Airlines_Logo.svg/2560px-Vietnam_Airlines_Logo.svg.png",
    airlineName: "Vietnam Airlines",
    departTime: "08:00",
    arriveTime: "14:00",
    duration: "6g 00p",
    price: 95,
    currency: "US$",
    stops: 1, // Chuyến này có dừng để test UI
    flightNumber: "VN999",
  },
];
