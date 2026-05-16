import { describe, expect, it } from "vitest";
import { maxSubArraySum } from "./largest.js";

describe("maxSubArraySum", () => {
  it("returns the largest sum for a window of the given size", () => {
    expect(maxSubArraySum([1, 2, 3, 4, 5], 2)).toBe(9);
  });

  it("returns 0 when the array is smaller than the window size", () => {
    expect(maxSubArraySum([1, 2], 3)).toBe(0);
    expect(maxSubArraySum([5], 2)).toBe(0);
    expect(maxSubArraySum([], 1)).toBe(0);
  });

  it("handles a window that spans the entire array", () => {
    expect(maxSubArraySum([1, 2, 3], 3)).toBe(6);
  });

  it("handles a window of size 1", () => {
    expect(maxSubArraySum([4, -1, 7, 2], 1)).toBe(7);
  });

  it("finds the max window when it is not at the end", () => {
    expect(maxSubArraySum([10, 9, 1, 2], 2)).toBe(19);
  });

  it("works with negative numbers", () => {
    expect(maxSubArraySum([-1, -2, -3, -4], 2)).toBe(-3);
    expect(maxSubArraySum([10, -1, 5, 2], 2)).toBe(9);
  });

  it("handles duplicate values", () => {
    expect(maxSubArraySum([3, 3, 3, 3], 2)).toBe(6);
  });

  it("handles a longer array with a larger window", () => {
    expect(maxSubArraySum([2, 1, 5, 1, 3, 2], 3)).toBe(9);
  });
});
