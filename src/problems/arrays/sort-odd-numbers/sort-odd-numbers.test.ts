import { describe, expect, it } from "vitest";
import { sortOddNumbers } from "./sort-odd-numbers.js";

describe("sortOddNumbers", () => {
  it("sorts odd numbers while keeping evens in place", () => {
    expect(sortOddNumbers([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
  });

  it("returns the same array when there are no odd numbers", () => {
    expect(sortOddNumbers([2, 4, 6])).toEqual([2, 4, 6]);
  });

  it("sorts when all numbers are odd", () => {
    expect(sortOddNumbers([9, 1, 5])).toEqual([1, 5, 9]);
  });

  it("handles an empty array", () => {
    expect(sortOddNumbers([])).toEqual([]);
  });

  it("handles a single element", () => {
    expect(sortOddNumbers([7])).toEqual([7]);
    expect(sortOddNumbers([2])).toEqual([2]);
  });

  it("handles a single odd among evens", () => {
    expect(sortOddNumbers([2, 5, 4, 6])).toEqual([2, 5, 4, 6]);
  });

  it("does not mutate the original array", () => {
    const input = [5, 3, 2, 8, 1, 4];
    const copy = [...input];

    sortOddNumbers(input);

    expect(input).toEqual(copy);
  });
});
