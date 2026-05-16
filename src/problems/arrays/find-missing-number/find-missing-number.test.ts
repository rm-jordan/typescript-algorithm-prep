import { describe, expect, it } from "vitest";
import { findMissingNumber } from "./find-missing-number.js";

describe("findMissingNumber", () => {
  it("returns the missing number in sorted input", () => {
    expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
  });

  it("returns the missing number when input is unsorted", () => {
    expect(findMissingNumber([2, 3, 1, 5])).toBe(4);
  });

  it("handles a missing number at the start", () => {
    expect(findMissingNumber([2, 3])).toBe(1);
  });

  it("handles a missing number at the end", () => {
    expect(findMissingNumber([1, 2, 3])).toBe(4);
  });

  it("handles a longer sequence", () => {
    expect(findMissingNumber([1, 2, 4, 5, 6, 7, 8])).toBe(3);
  });

  it("handles two elements with the first missing", () => {
    expect(findMissingNumber([2])).toBe(1);
  });

  it("handles two elements with the last missing", () => {
    expect(findMissingNumber([1])).toBe(2);
  });
});
