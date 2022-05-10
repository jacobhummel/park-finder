import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";

export type StackList = {
  HomeScreen: undefined;
  MapScreen: undefined;
};
const Stack = createNativeStackNavigator<StackList>();

const RootStack = () => (
  <>
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </>
);
export default RootStack;
