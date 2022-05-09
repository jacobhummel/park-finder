import { StatusBar } from "expo-status-bar";
import { Box, HStack, IconButton, Icon, Text, Input } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useCallback } from "react";
import { useState } from "react";

export function AppBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleSearchPress = useCallback(() => {
    setShowSearch(true);
  }, [setShowSearch]);

  const handleSearchClosePress = useCallback(() => {
    setShowSearch(false);
    setSearchText("");
  }, [setShowSearch, setSearchText]);

  return (
    <>
      <StatusBar />
      <Box safeAreaTop bg="primary.700" />
      <HStack
        bg="primary.600"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
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
              onChangeText={(text) => setSearchText(text)}
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
      </HStack>
    </>
  );
}
