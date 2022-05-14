import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";

export type RootStackParamList = {
  navigate: any; // react navigation type issue
  HomeScreen: undefined;
  MapScreen: { id: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

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
        initialParams={{ id: undefined }}
      />
    </Stack.Navigator>
  </>
);
export default RootStack;
