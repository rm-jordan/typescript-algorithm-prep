import { describe, expect, it } from "vitest";
import { fizzBuzz } from "./fizz-buzz.js";

describe("fizzBuzz", () => {
  it("returns the fizz buzz sequence for n = 5", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("includes FizzBuzz at multiples of 15", () => {
    expect(fizzBuzz(15)[14]).toBe("FizzBuzz");
  });

  it("returns an empty array for n = 0", () => {
    expect(fizzBuzz(0)).toEqual([]);
  });

  it("handles n = 1", () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });

  it("labels multiples of 3 as Fizz", () => {
    const result = fizzBuzz(9);
    expect(result[2]).toBe("Fizz");
    expect(result[5]).toBe("Fizz");
    expect(result[8]).toBe("Fizz");
  });

  it("labels multiples of 5 as Buzz", () => {
    const result = fizzBuzz(10);
    expect(result[4]).toBe("Buzz");
    expect(result[9]).toBe("Buzz");
  });
});
