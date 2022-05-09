import React from "react";
import { StatusBar } from "expo-status-bar";
import { Box, HStack, IconButton, Icon, Text } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function AppBar() {
  return (
    <>
      <StatusBar />
      <Box safeAreaTop bg="primary.700" />
      <HStack
        bg="primary.600"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon size="sm" as={MaterialIcons} name="menu" color="white" />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}
