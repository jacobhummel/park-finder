import { StatusBar } from "expo-status-bar";
import { Box, HStack } from "native-base";
import React from "react";

export function AppBar({ children }: React.PropsWithChildren<{}>) {
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
        {children}
      </HStack>
    </>
  );
}
