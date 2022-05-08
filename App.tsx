import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import customTheme from "./src/constants/nativeBaseTheme";
import { ApolloProvider } from "@apollo/client";
import client from "./src/api/client";

// root navigation stack
import RootStack from "./src/navigation/RootStack";

export function AppProviders({ children }: React.PropsWithChildren<{}>) {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={customTheme}>
        <NativeBaseProvider>{children}</NativeBaseProvider>
      </NavigationContainer>
    </ApolloProvider>
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
