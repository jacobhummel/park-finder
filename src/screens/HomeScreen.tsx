import { Center } from "native-base";

import { AppBar } from "components/AppBar";
import ParkList from "components/Park/ParkList";

const HomeScreen = () => {
  return (
    <>
      <AppBar />
      <Center h="100%" w="100%">
        <ParkList />
      </Center>
    </>
  );
};

export default HomeScreen;
