import { describe, expect, it } from "vitest";
import { removeDuplicates } from "./remove-duplicates.js";

describe("removeDuplicates", () => {
  it("removes duplicates while preserving order", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns the same array when there are no duplicates", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("handles an empty array", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it("handles a single element", () => {
    expect(removeDuplicates([7])).toEqual([7]);
  });

  it("handles an array where all values are the same", () => {
    expect(removeDuplicates([2, 2, 2, 2])).toEqual([2]);
  });

  it("keeps the first occurrence when duplicates are non-adjacent", () => {
    expect(removeDuplicates([1, 2, 1, 3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("works with negative numbers and zero", () => {
    expect(removeDuplicates([0, -1, 0, -1, 2])).toEqual([0, -1, 2]);
  });

  it("does not mutate the original array", () => {
    const input = [1, 2, 2, 3];
    const copy = [...input];

    removeDuplicates(input);

    expect(input).toEqual(copy);
  });
});
