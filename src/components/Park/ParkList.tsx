import { HStack, FlatList, Spinner, Heading } from "native-base";

import useParks from "hooks/useParks";
import ParkRow from "./ParkRow";

const ParkList = () => {
  const { isFetching, isLoading, data, refetch } = useParks();

  if (isLoading) {
    return (
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading parks" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    );
  }

  return (
    <FlatList
      w="100%"
      data={data?.results || []}
      refreshing={isFetching}
      onRefresh={refetch}
      renderItem={({ item }) => <ParkRow {...item} />}
      keyExtractor={(item) => item.name}
    />
  );
};

export default ParkList;
