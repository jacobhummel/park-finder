import { AppBar } from "components/AppBar";
import ParkList from "components/Park/ParkList";
import { useCallback, useState } from "react";
import { HStack, IconButton, Icon, Text, Input, Center } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/RootStack";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

const HomeScreen = ({ navigation }: Props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = useCallback(
    (text: string) => {
      setSearchText(text);
    },
    [setSearchText]
  );

  const handleSearchPress = useCallback(() => {
    setShowSearch(true);
  }, [setShowSearch]);

  const handleSearchClosePress = useCallback(() => {
    setShowSearch(false);
    handleSearchTextChange("");
  }, [setShowSearch, setSearchText]);

  return (
    <>
      <AppBar>
        {!showSearch && (
          <HStack alignItems="center">
            <IconButton
              icon={
                <Icon size="md" as={MaterialIcons} name="menu" color="white" />
              }
            />
            <Text color="white" fontSize="23" fontWeight="bold">
              Park Finder
            </Text>
          </HStack>
        )}
        <HStack>
          {showSearch ? (
            <Input
              autoFocus
              value={searchText}
              onChangeText={handleSearchTextChange}
              InputLeftElement={
                <Icon
                  as={MaterialIcons}
                  name="search"
                  size="md"
                  ml="2"
                  color="white"
                />
              }
              InputRightElement={
                <Icon
                  as={MaterialIcons}
                  name="close"
                  size="md"
                  mr="2"
                  color="white"
                  onPress={handleSearchClosePress}
                />
              }
              fontSize="20"
              color="white"
              placeholder="Enter Park"
            />
          ) : (
            <IconButton
              icon={
                <Icon
                  as={MaterialIcons}
                  name="search"
                  size="md"
                  color="white"
                />
              }
              onPress={handleSearchPress}
            />
          )}
        </HStack>
      </AppBar>
      <Center h="100%" w="100%">
        <ParkList searchText={searchText} />
      </Center>
    </>
  );
};

export default HomeScreen;
