export interface Park {
  id: string;
  address: string;
  name: string;
  lat: number;
  lng: number;
}

export interface ParksResponse {
  results: Park[];
}

const DEMO_RESULTS: Park[] = [
  {
    id: "1",
    name: "Parkers Lake Park",
    address: "15205 County Rd 6 & Niagara Lane, Plymouth, MN 55447",
    lat: 44.9964,
    lng: -93.4747,
  },
  {
    id: "2",
    name: "Knollway Park",
    address: "895 Horn Dr, Minnetonka, MN 55305",
    lat: 44.9736,
    lng: -93.4525,
  },
  {
    id: "3",
    name: "Meadow Neighborhood Park",
    address: "2725 Oakland Rd, Minnetonka, MN 55305",
    lat: 44.952,
    lng: -93.4507,
  },
  {
    id: "4",
    name: "West Medicine Lake Park",
    address: "1920 W Medicine Lake Dr, Plymouth, MN 55441",
    lat: 45.0021,
    lng: -93.4351,
  },
];

export async function searchParks(searchText: string): Promise<ParksResponse> {
  return Promise.resolve({
    results: searchText
      ? DEMO_RESULTS.filter((result) => result.name.includes(searchText))
      : DEMO_RESULTS,
  });
}

export async function searchParksById(id: string): Promise<Park | undefined> {
  return Promise.resolve(DEMO_RESULTS.find((result) => result.id === id));
}
