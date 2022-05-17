import { AppCtxProvider } from "../context";
import React from "react";
import { render as testingLibRender } from "@testing-library/react-native";
import { QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import client from "api/client";
import customTheme from "constants/nativeBaseTheme";

export function render(element: React.ReactElement) {
  // https://docs.nativebase.io/next/testing
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  return testingLibRender(
    <AppCtxProvider>
      <QueryClientProvider client={client}>
        <NavigationContainer theme={customTheme}>
          <NativeBaseProvider initialWindowMetrics={inset}>
            {element}
          </NativeBaseProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </AppCtxProvider>
  );
}
