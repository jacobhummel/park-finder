import { Center } from "native-base";
import { AppBar } from "components/AppBar";
import Map from "components/Map/Map";
import { HStack, IconButton, Icon, Text, Input } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const { goBack } = useNavigation();

  return (
    <>
      <AppBar>
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon
                size="md"
                as={MaterialIcons}
                name="arrow-back"
                color="white"
              />
            }
            onPress={goBack}
          />
          <Text color="white" fontSize="23" fontWeight="bold">
            Map Screen
          </Text>
        </HStack>
      </AppBar>
      <Center h="100%" w="100%">
        <Map />
      </Center>
    </>
  );
};

export default MapScreen;
