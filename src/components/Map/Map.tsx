import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Box } from "native-base";

type Props = { latitude: number; longitude: number };

const Map = ({ latitude, longitude }: Props) => {
  return (
    <Box flex="1">
      <MapView style={styles.map} showsUserLocation>
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
    </Box>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
