import { describe, expect, it } from "vitest";
import { intersection } from "./intersection.js";

/** Sort for order-independent comparison. */
function sorted(nums: number[]): number[] {
  return [...nums].sort((a, b) => a - b);
}

describe("intersection", () => {
  it("returns unique common values between two arrays", () => {
    expect(sorted(intersection([1, 2, 2, 3], [2, 3, 4]))).toEqual([2, 3]);
  });

  it("returns an empty array when there is no overlap", () => {
    expect(intersection([1, 2], [3, 4])).toEqual([]);
  });

  it("handles when one array is empty", () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
    expect(intersection([1, 2, 3], [])).toEqual([]);
  });

  it("deduplicates values that appear multiple times in both arrays", () => {
    expect(sorted(intersection([2, 2, 2], [2, 2, 3]))).toEqual([2]);
  });

  it("returns all values when arrays are identical", () => {
    expect(sorted(intersection([1, 2, 3], [1, 2, 3]))).toEqual([1, 2, 3]);
  });
});
