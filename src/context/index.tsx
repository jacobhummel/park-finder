import { NavigationContainer } from "@react-navigation/native";
import client from "api/client";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { QueryClientProvider } from "react-query";
import customTheme from "constants/nativeBaseTheme";

export function createCtx<A>(defaultValue: A) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = React.createContext({
    state: defaultValue,
    update: defaultUpdate,
  });
  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, update] = React.useState(defaultValue);
    return <ctx.Provider value={{ state, update }} {...props} />;
  }
  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}

interface AppContextInterface {
  sourceLocation?: object;
  destinationLocation?: object;
}

const [ctx, AppCtxProvider] = createCtx<AppContextInterface>({});
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
