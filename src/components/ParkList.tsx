import { StyleSheet } from "react-native";
import React from "react";
import useParks from "../hooks/useParks";
import {
  Box,
  HStack,
  VStack,
  Spacer,
  Text,
  FlatList,
  Spinner,
  Heading,
} from "native-base";

const ParkList = () => {
  const { isFetching, isLoading, data, refetch } = useParks();

  if (isLoading || isFetching) {
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
      refreshing={isLoading}
      onRefresh={refetch}
      renderItem={({ item }) => (
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: "gray.600",
          }}
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="2"
        >
          <HStack space={3} justifyContent="space-between">
            <VStack>
              <Text
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                bold
              >
                {item.name}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                {item.location}
              </Text>
            </VStack>
            <Spacer />
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default ParkList;

const styles = StyleSheet.create({});
