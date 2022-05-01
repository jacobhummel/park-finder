import * as React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

// root navigation stack
import RootStack from "./src/navigation/RootStack";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // // pre-loading assets/fonts?
  if (isLoading) {
    return (
      <AppLoading
        onError={() => {
          // console.warn
        }}
        onFinish={() => setIsLoading(false)}
        startAsync={() => Promise.resolve()}
      />
    );
  }

  return (
    <React.Fragment>
      <StatusBar />

      <RootStack />
    </React.Fragment>
  );
};

export default App;
