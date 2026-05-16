import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./contains-duplicate.js";

describe("containsDuplicate", () => {
  it("returns true when a value appears more than once", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("returns false when all values are unique", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it("returns true for adjacent duplicates", () => {
    expect(containsDuplicate([1, 1])).toBe(true);
  });

  it("returns false for a single element", () => {
    expect(containsDuplicate([7])).toBe(false);
  });

  it("handles an empty array", () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it("returns true when duplicates are far apart", () => {
    expect(containsDuplicate([1, 2, 3, 4, 5, 1])).toBe(true);
  });
});
