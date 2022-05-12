import { Park } from "api/parks";
import { Button, HStack, VStack, Spacer, Text } from "native-base";

interface Props extends Park {
  onPress(id: string): void;
}

const ParkRow = ({ id, name, address, onPress }: Props) => {
  return (
    <Button
      borderBottomWidth="1"
      _dark={{
        backgroundColor: "dark.400",
        borderColor: "gray.600",
      }}
      borderColor="coolGray.200"
      backgroundColor="white"
      justifyContent="flex-start"
      onPress={() => onPress(id)}
      py="3"
      px="4"
    >
      <HStack space={3} justifyContent="space-between">
        <VStack>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            bold
          >
            {name}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {address}
          </Text>
        </VStack>
        <Spacer />
      </HStack>
    </Button>
  );
};

export default ParkRow;
