import { Center } from "native-base";
import { AppBar } from "components/AppBar";
import ParkList from "components/Park/ParkList";
import { useState } from "react";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <AppBar onSearchTextChanged={setSearchText} />
      <Center h="100%" w="100%">
        <ParkList searchText={searchText} />
      </Center>
    </>
  );
};

export default HomeScreen;
