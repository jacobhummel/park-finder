import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { QueryClientProvider } from "react-query";
import customTheme from "./src/constants/nativeBaseTheme";
import client from "./src/api/client";

// root navigation stack
import RootStack from "./src/navigation/RootStack";

export function AppProviders({ children }: React.PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer theme={customTheme}>
        <NativeBaseProvider>{children}</NativeBaseProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const App = () => {
  return (
    <AppProviders>
      <RootStack />
    </AppProviders>
  );
};

export default App;
