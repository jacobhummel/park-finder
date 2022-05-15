import { fireEvent } from "@testing-library/react-native";
import { render } from "utils/test-utils";
import ParkRow, { ParkRowProps } from "../ParkRow";

test("should render", () => {
  // ARRANGE
  const testProps: ParkRowProps = {
    id: "1",
    name: "Parkers Lake Park",
    address: "15205 County Rd 6 & Niagara Lane, Plymouth, MN 55447",
    lat: 44.9964,
    lng: -93.4747,
    onPress: jest.fn(),
  };

  // ACT
  const { toJSON } = render(<ParkRow {...testProps} />);

  // ASSERT
  expect(toJSON()).toMatchSnapshot();
});

test("should pass id on click", () => {
  // ARRANGE
  const testProps: ParkRowProps = {
    id: "1",
    name: "Parkers Lake Park",
    address: "15205 County Rd 6 & Niagara Lane, Plymouth, MN 55447",
    lat: 44.9964,
    lng: -93.4747,
    onPress: jest.fn(),
  };

  // ACT
  const { getByRole } = render(<ParkRow {...testProps} />);

  const selectableRow = getByRole("button");
  fireEvent.press(selectableRow);

  // ASSERT
  expect(testProps.onPress).toBeCalledWith(testProps.id);
});
