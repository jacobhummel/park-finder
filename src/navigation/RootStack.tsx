import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// drawer stack
// import DrawerStack from './DrawerStack';

// screens
import SplashScreen from "../screens/Splash";

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default RootStack;
