import { describe, expect, it } from "vitest";
import { mergeSortedArrays } from "./merge-sorted-arrays.js";

describe("mergeSortedArrays", () => {
  it("merges two sorted arrays into one sorted array", () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("handles when the first array is empty", () => {
    expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("handles when the second array is empty", () => {
    expect(mergeSortedArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it("handles when both arrays are empty", () => {
    expect(mergeSortedArrays([], [])).toEqual([]);
  });

  it("handles arrays of different lengths", () => {
    expect(mergeSortedArrays([1, 5, 9], [2, 3])).toEqual([1, 2, 3, 5, 9]);
  });

  it("handles duplicate values", () => {
    expect(mergeSortedArrays([1, 2, 2], [2, 3])).toEqual([1, 2, 2, 2, 3]);
  });

  it("does not mutate the original arrays", () => {
    const arr1 = [1, 3];
    const arr2 = [2, 4];
    const copy1 = [...arr1];
    const copy2 = [...arr2];

    mergeSortedArrays(arr1, arr2);

    expect(arr1).toEqual(copy1);
    expect(arr2).toEqual(copy2);
  });
});
