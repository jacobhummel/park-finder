export interface Park {
  id: string;
  location: number[];
  name: string;
}

export interface ParksResponse {
  results: Park[];
}

const DEMO_RESULTS = [
  { id: "frp", name: "French Regional Park", location: [32, 45] },
  { id: "kp", name: "Knollwood Park", location: [32, 45] },
  { id: "gtp", name: "Gro Tonka Park", location: [32, 45] },
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
