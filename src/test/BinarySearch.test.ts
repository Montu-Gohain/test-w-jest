import * as TestFunction from "../algorithms/BinarySearch";
const { BinarySearch } = jest.requireActual<typeof TestFunction>(
  "../algorithms/BinarySearch"
);

describe("Test Subject 📝📝📝 : Binary Search", () => {
  test("Test case 🧪🧪🧪 : 1", () => {
    const nums = [1, 2, 3, 4, 5, 54];
    const res = BinarySearch(nums, 5);
    expect(res).toBe(4);
  });
  test("Test case 🧪🧪🧪 : 2", () => {
    const nums = [1, 2, 3, 4, 5, 54];
    const res = BinarySearch(nums, 345);
    expect(res).toBe(-1);
  });
  test("Test case 🧪🧪🧪 : 3", () => {
    const nums = [1, 2, 3, 4, 5, 54];
    const res = BinarySearch(nums, 3);
    expect(res).toBe(2);
  });
});
