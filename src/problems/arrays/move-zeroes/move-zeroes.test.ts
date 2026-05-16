import { describe, expect, it } from "vitest";
import { moveZeroes } from "./move-zeroes.js";

describe("moveZeroes", () => {
  it("moves zeroes to the end while preserving order", () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });

  it("returns the same array when there are no zeroes", () => {
    expect(moveZeroes([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("handles an array of all zeroes", () => {
    expect(moveZeroes([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it("handles an empty array", () => {
    expect(moveZeroes([])).toEqual([]);
  });

  it("handles an array with no non-zero elements except at the start", () => {
    expect(moveZeroes([1, 2])).toEqual([1, 2]);
  });

  it("does not mutate the original array", () => {
    const input = [0, 1, 0, 3, 12];
    const copy = [...input];

    moveZeroes(input);

    expect(input).toEqual(copy);
  });
});
