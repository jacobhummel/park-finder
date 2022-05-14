import { AppBar } from "components/AppBar";
import Map from "components/Map/Map";
import {
  HStack,
  IconButton,
  Icon,
  Text,
  Center,
  Heading,
  Spinner,
} from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStack";
import usePark from "hooks/usePark";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList, "MapScreen">;

const MapScreen = ({ route }: Props) => {
  const { goBack } = useNavigation();
  const { id } = route.params;
  const { data, isLoading } = usePark(id);

  if (isLoading || !data) {
    return (
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading park" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    );
  }

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
            {data.name}
          </Text>
        </HStack>
      </AppBar>
      <Center h="100%" w="100%">
        <Map latitude={data.lat} longitude={data.lng} />
      </Center>
    </>
  );
};

export default MapScreen;
