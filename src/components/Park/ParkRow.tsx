import { Park } from "hooks/useParks";
import { Box, HStack, VStack, Spacer, Text } from "native-base";

interface Props extends Park {}

const ParkRow = ({ name, location }: Props) => {
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: "gray.600",
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
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
            {location}
          </Text>
        </VStack>
        <Spacer />
      </HStack>
    </Box>
  );
};

export default ParkRow;
