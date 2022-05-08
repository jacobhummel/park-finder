import { StyleSheet } from "react-native";
import React from "react";
import useExchangeRates from "../hooks/useExchangeRates";
import {
  Box,
  HStack,
  VStack,
  Spacer,
  Text,
  FlatList,
  Spinner,
} from "native-base";
import client from "../api/client";

const ExchangeRateList = () => {
  const { loading, error, data } = useExchangeRates();

  if (loading || !data?.rates) {
    return <Spinner accessibilityLabel="Loading Exchange Rates" />;
  }

  return (
    <FlatList
      data={data.rates}
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
                {item.currency}
              </Text>
            </VStack>
            <Spacer />
            <Text
              fontSize="xs"
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              alignSelf="flex-start"
            >
              {item.rate}
            </Text>
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.currency}
    />
  );
};

export default ExchangeRateList;

const styles = StyleSheet.create({});
