import { HStack, FlatList, Spinner, Heading } from "native-base";
import { useNavigation } from "@react-navigation/native";

import useParks from "hooks/useParks";
import ParkRow from "./ParkRow";
import { RootStackParamList } from "navigation/RootStack";
import { useCallback } from "react";

export interface ParkListProps {
  searchText: string;
}

const ParkList = ({ searchText }: ParkListProps) => {
  const { isFetching, isLoading, data, refetch } = useParks(searchText);
  const { navigate } = useNavigation<RootStackParamList>();
  const handleRowPress = useCallback(
    (id: string) => {
      navigate("MapScreen", { id });
    },
    [navigate]
  );

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
      renderItem={({ item }) => <ParkRow {...item} onPress={handleRowPress} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ParkList;
