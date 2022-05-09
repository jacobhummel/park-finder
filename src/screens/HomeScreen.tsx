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
import ParkList from "../components/ParkList";

const HomeScreen = () => {
  return (
    <>
      <AppBar />
      <Center h="100%" w="100%">
        <ParkList />
      </Center>
    </>
  );
};

export default HomeScreen;
