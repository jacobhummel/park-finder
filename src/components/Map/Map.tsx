import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Box } from "native-base";

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  return (
    <Box flex="1">
      <MapView
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={styles.map}
      >
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
