/**
 * Vietnamese cities and airports data
 * Used for city/airport selection in search forms
 */

export interface City {
  code: string;
  name: string;
  nameEn: string;
  country: string;
  airport?: string;
  airportCode?: string;
}

export const VIETNAM_CITIES: City[] = [
  { code: "HAN", name: "Hà Nội", nameEn: "Hanoi", country: "VN", airport: "Nội Bài", airportCode: "HAN" },
  { code: "SGN", name: "Hồ Chí Minh", nameEn: "Ho Chi Minh City", country: "VN", airport: "Tân Sơn Nhất", airportCode: "SGN" },
  { code: "DAD", name: "Đà Nẵng", nameEn: "Da Nang", country: "VN", airport: "Đà Nẵng", airportCode: "DAD" },
  { code: "HPH", name: "Hải Phòng", nameEn: "Hai Phong", country: "VN", airport: "Cát Bi", airportCode: "HPH" },
  { code: "VCA", name: "Cần Thơ", nameEn: "Can Tho", country: "VN", airport: "Cần Thơ", airportCode: "VCA" },
  { code: "NHA", name: "Nha Trang", nameEn: "Nha Trang", country: "VN", airport: "Cam Ranh", airportCode: "CXR" },
  { code: "PQC", name: "Phú Quốc", nameEn: "Phu Quoc", country: "VN", airport: "Phú Quốc", airportCode: "PQC" },
  { code: "DLI", name: "Đà Lạt", nameEn: "Da Lat", country: "VN", airport: "Liên Khương", airportCode: "DLI" },
  { code: "VDO", name: "Vinh", nameEn: "Vinh", country: "VN", airport: "Vinh", airportCode: "VII" },
  { code: "THD", name: "Thanh Hóa", nameEn: "Thanh Hoa", country: "VN", airport: "Thọ Xuân", airportCode: "THD" },
];

// Popular international cities
export const INTERNATIONAL_CITIES: City[] = [
  { code: "BKK", name: "Bangkok", nameEn: "Bangkok", country: "TH", airport: "Suvarnabhumi", airportCode: "BKK" },
  { code: "SIN", name: "Singapore", nameEn: "Singapore", country: "SG", airport: "Changi", airportCode: "SIN" },
  { code: "KUL", name: "Kuala Lumpur", nameEn: "Kuala Lumpur", country: "MY", airport: "KLIA", airportCode: "KUL" },
  { code: "BJS", name: "Bắc Kinh", nameEn: "Beijing", country: "CN", airport: "Capital", airportCode: "PEK" },
  { code: "SHA", name: "Thượng Hải", nameEn: "Shanghai", country: "CN", airport: "Pudong", airportCode: "PVG" },
  { code: "NRT", name: "Tokyo", nameEn: "Tokyo", country: "JP", airport: "Narita", airportCode: "NRT" },
  { code: "ICN", name: "Seoul", nameEn: "Seoul", country: "KR", airport: "Incheon", airportCode: "ICN" },
  { code: "SYD", name: "Sydney", nameEn: "Sydney", country: "AU", airport: "Kingsford Smith", airportCode: "SYD" },
  { code: "DXB", name: "Dubai", nameEn: "Dubai", country: "AE", airport: "Dubai International", airportCode: "DXB" },
  { code: "LHR", name: "London", nameEn: "London", country: "GB", airport: "Heathrow", airportCode: "LHR" },
];

export const ALL_CITIES = [...VIETNAM_CITIES, ...INTERNATIONAL_CITIES];

/**
 * Get city by code
 */
export const getCityByCode = (code: string): City | undefined => {
  return ALL_CITIES.find(city => city.code === code);
};

/**
 * Search cities by name
 */
export const searchCities = (query: string): City[] => {
  const lowerQuery = query.toLowerCase();
  return ALL_CITIES.filter(
    city =>
      city.name.toLowerCase().includes(lowerQuery) ||
      city.nameEn.toLowerCase().includes(lowerQuery) ||
      city.code.toLowerCase().includes(lowerQuery)
  );
};

