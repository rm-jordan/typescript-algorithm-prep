import { describe, expect, it } from "vitest";
import { largestInEachArray } from "./largest-in-each-array.js";

describe("largestInEachArray", () => {
  it("returns the largest value from each nested array", () => {
    expect(
      largestInEachArray([
        [1, 2, 3],
        [4, 5, 1],
        [9, 0, 7],
      ]),
    ).toEqual([3, 5, 9]);
  });

  it("handles single-element nested arrays", () => {
    expect(largestInEachArray([[5], [2], [8]])).toEqual([5, 2, 8]);
  });

  it("handles negative numbers", () => {
    expect(largestInEachArray([[-1, -5], [-2, -3]])).toEqual([-1, -2]);
  });

  it("returns an empty array when input is empty", () => {
    expect(largestInEachArray([])).toEqual([]);
  });

  it("handles duplicates within a nested array", () => {
    expect(largestInEachArray([[3, 3, 1], [2, 2, 2]])).toEqual([3, 2]);
  });
});
