import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </>
);
export default RootStack;
