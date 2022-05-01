import { Text } from "react-native";
import React from "react";
import styles from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = () => {
  return (
    <SafeAreaView style={[styles.container, styles.p16]}>
      <Text>Splash</Text>
    </SafeAreaView>
  );
};

export default Splash;
