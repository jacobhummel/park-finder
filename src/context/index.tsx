import { NavigationContainer } from "@react-navigation/native";
import client from "api/client";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { QueryClientProvider } from "react-query";
import customTheme from "constants/nativeBaseTheme";
import { createCtx } from "./createCtx";

interface AppContextInterface {
  // non-network global state goes here
}

export const [ctx, AppCtxProvider] = createCtx<AppContextInterface>({});
export const AppContext = ctx;

export function AppProviders({ children }: React.PropsWithChildren<{}>) {
  return (
    <AppCtxProvider>
      <QueryClientProvider client={client}>
        <NavigationContainer theme={customTheme}>
          <NativeBaseProvider>{children}</NativeBaseProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </AppCtxProvider>
  );
}
