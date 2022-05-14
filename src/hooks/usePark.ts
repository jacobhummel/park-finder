import { useQuery } from "react-query";
import queryKeys from "constants/queryKeys";
import { Park, searchParksById } from "api/parks";
import client from "api/client";

export default function usePark(id: string) {
  return useQuery([queryKeys.PARK, id], () => searchParksById(id), {
    initialData: () => {
      return client
        .getQueryData<Park[]>(queryKeys.PARKS)
        ?.find((d) => d.id === id);
    },
  });
}
