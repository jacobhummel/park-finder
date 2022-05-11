import * as React from "react";
import { AppProviders } from "./src/context";

// root navigation stack
import RootStack from "./src/navigation/RootStack";

const App = () => {
  return (
    <AppProviders>
      <RootStack />
    </AppProviders>
  );
};

export default App;
