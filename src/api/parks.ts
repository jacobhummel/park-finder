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
    lat: 44.983666,
    lng: 93.4863813,
  },
  {
    id: "2",
    name: "Knollway Park",
    address: "895 Horn Dr, Minnetonka, MN 55305",
    lat: 44.9736322,
    lng: -93.4690079,
  },
  {
    id: "3",
    name: "Meadow Neighborhood Park and Community Preserve",
    address: "2725 Oakland Rd, Minnetonka, MN 55305",
    lat: 44.9520435,
    lng: -93.467195,
  },
  {
    id: "4",
    name: "West Medicine Lake Park",
    address: "1920 W Medicine Lake Dr, Plymouth, MN 55441",
    lat: 44.9754056,
    lng: -93.4491934,
  },
];

const waitFor = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export async function searchParks(searchText: string): Promise<ParksResponse> {
  await waitFor(500); // fake network timing

  return Promise.resolve({
    results: searchText
      ? DEMO_RESULTS.filter((result) => result.name.includes(searchText))
      : DEMO_RESULTS,
  });
}
