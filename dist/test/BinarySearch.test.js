// src/test/BinarySearch.test.ts
var { BinarySearch } = jest.requireActual(
  "../algorithms/BinarySearch"
);
describe("Test Subject \u{1F4DD}\u{1F4DD}\u{1F4DD} : Binary Search", () => {
  test("Test case \u{1F9EA}\u{1F9EA}\u{1F9EA} : 1", () => {
    const nums = [1, 2, 3, 4, 5, 54];
    const res = BinarySearch(nums, 5);
    expect(res).toBe(4);
  });
  test("Test case \u{1F9EA}\u{1F9EA}\u{1F9EA} : 2", () => {
    const nums = [1, 2, 3, 4, 5, 54];
    const res = BinarySearch(nums, 345);
    expect(res).toBe(-1);
  });
  test("Test case \u{1F9EA}\u{1F9EA}\u{1F9EA} : 3", () => {
    const nums = [1, 2, 3, 4, 5, 54];
    const res = BinarySearch(nums, 1);
    expect(res).toBe(0);
  });
});
