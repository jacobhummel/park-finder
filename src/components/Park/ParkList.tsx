import { HStack, FlatList, Spinner, Heading } from "native-base";
import { useNavigation } from "@react-navigation/native";

import useParks from "hooks/useParks";
import ParkRow from "./ParkRow";
import { StackList } from "navigation/RootStack";

const ParkList = ({ searchText }: { searchText: string }) => {
  const { isFetching, isLoading, data, refetch } = useParks(searchText);
  const { navigate } = useNavigation<StackList>();

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

  const handleRowPress = (id: string) => {
    navigate("MapScreen", { id });
  };

  return (
    <FlatList
      w="100%"
      data={data?.results || []}
      refreshing={isFetching}
      onRefresh={refetch}
      renderItem={({ item }) => <ParkRow {...item} onPress={handleRowPress} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ParkList;
