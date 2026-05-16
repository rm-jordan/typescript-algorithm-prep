import { describe, expect, it } from "vitest";
import { twoSum } from "./solution.js";

describe("twoSum", () => {
  it("returns indices for a valid pair", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("handles duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("works when the pair is not at the start", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
