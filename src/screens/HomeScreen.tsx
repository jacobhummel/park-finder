import React from "react";
import {
  Center,
  Spinner,
  FlatList,
  Box,
  HStack,
  Spacer,
  VStack,
  Text,
} from "native-base";
import { AppBar } from "../components/AppBar";
import useExchangeRates from "../hooks/useExchangeRates";
import ExchangeRateList from "../components/ExchangeRateList";

const HomeScreen = () => {
  return (
    <>
      <AppBar />
      <Center h="100%" w="100%">
        <ExchangeRateList />
      </Center>
    </>
  );
};

export default HomeScreen;
