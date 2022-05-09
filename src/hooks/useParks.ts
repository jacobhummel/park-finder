import { useQuery } from "react-query";

export interface Park {
  location: number[];
  name: string;
}

interface ParksResponse {
  results: Park[];
}

const DEMO_RESULTS = [
  { name: "French Regional Park", location: [32, 45] },
  { name: "Knollwood Park", location: [32, 45] },
  { name: "Gro Tonka Park", location: [32, 45] },
];

const waitFor = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export default function useParks() {
  return useQuery<ParksResponse>({
    queryFn: async () => {
      await waitFor(1000); // fake network speed

      return Promise.resolve({
        results: DEMO_RESULTS,
      });
    },
  });
}
