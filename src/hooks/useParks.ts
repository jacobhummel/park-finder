import { useQuery } from "react-query";
import queryKeys from "constants/queryKeys";
import { searchParks } from "api/parks";

export default function useParks(searchText: string) {
  return useQuery({
    queryKey: [queryKeys.PARKS, searchText],
    queryFn: () => searchParks(searchText),
  });
}
