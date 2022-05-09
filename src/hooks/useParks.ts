import queryKeys from "constants/queryKeys";
import { useQuery } from "react-query";

export interface Park {
  id: string;
  location: number[];
  name: string;
}

interface ParksResponse {
  results: Park[];
}

const DEMO_RESULTS = [
  { id: "frp", name: "French Regional Park", location: [32, 45] },
  { id: "kp", name: "Knollwood Park", location: [32, 45] },
  { id: "gtp", name: "Gro Tonka Park", location: [32, 45] },
];

const waitFor = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export default function useParks() {
  return useQuery<ParksResponse>({
    queryKey: queryKeys.PARKS,
    queryFn: async () => {
      await waitFor(1000); // fake network speed

      return Promise.resolve({
        results: DEMO_RESULTS,
      });
    },
  });
}
