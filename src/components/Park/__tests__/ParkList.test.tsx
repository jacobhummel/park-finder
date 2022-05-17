import { render } from "../../../utils/test-utils";
import ParkList, { ParkListProps } from "../ParkList";
import useParks from "../../../hooks/useParks";

// Solves TypeScript Errors
const mockedUseParks = useParks as jest.Mock<any>;

// Mock the module
jest.mock("hooks/useParks");

describe("ParkList", () => {
  beforeEach(() => {
    mockedUseParks.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render", () => {
    // ARRANGE
    const testProps: ParkListProps = {
      searchText: "",
    };

    // ACT
    const { toJSON } = render(<ParkList {...testProps} />);

    // ASSERT
    expect(toJSON()).toMatchSnapshot();
  });

  test("should display loading indicator", () => {
    // ARRANGE
    const testProps: ParkListProps = {
      searchText: "",
    };

    // ACT
    const { getByA11yLabel } = render(<ParkList {...testProps} />);

    // ASSERT
    expect(getByA11yLabel(/loading/i)).toBeTruthy();
  });

  test("should render list with items", () => {
    // ARRANGE
    const testProps: ParkListProps = {
      searchText: "",
    };

    const MOCK_RESULTS = {
      results: [
        {
          id: "1",
          name: "Parkers Lake Park",
          address: "15205 County Rd 6 & Niagara Lane, Plymouth, MN 55447",
          lat: 44.9964,
          lng: -93.4747,
        },
        {
          id: "2",
          name: "Knollway Park",
          address: "895 Horn Dr, Minnetonka, MN 55305",
          lat: 44.9736,
          lng: -93.4525,
        },
        {
          id: "3",
          name: "Meadow Neighborhood Park",
          address: "2725 Oakland Rd, Minnetonka, MN 55305",
          lat: 44.952,
          lng: -93.4507,
        },
        {
          id: "4",
          name: "West Medicine Lake Park",
          address: "1920 W Medicine Lake Dr, Plymouth, MN 55441",
          lat: 45.0021,
          lng: -93.4351,
        },
      ],
    };
    mockedUseParks.mockImplementation(() => ({
      isLoading: false,
      data: MOCK_RESULTS,
    }));

    // ACT
    const { queryByA11yLabel, getByText } = render(<ParkList {...testProps} />);

    // ASSERT
    expect(queryByA11yLabel(/loading/i)).toBeFalsy();

    expect(getByText(MOCK_RESULTS.results[0].name)).toBeTruthy();
    expect(getByText(MOCK_RESULTS.results[0].address)).toBeTruthy();
    expect(getByText(MOCK_RESULTS.results[1].name)).toBeTruthy();
    expect(getByText(MOCK_RESULTS.results[1].address)).toBeTruthy();
    expect(getByText(MOCK_RESULTS.results[2].name)).toBeTruthy();
    expect(getByText(MOCK_RESULTS.results[2].address)).toBeTruthy();
  });
});
