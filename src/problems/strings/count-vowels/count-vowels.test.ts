import { describe, expect, it } from "vitest";
import { countVowels } from "./count-vowels.js";

describe("countVowels", () => {
  it("counts vowels in a mixed-case string", () => {
    expect(countVowels("TypeScript")).toBe(2);
  });

  it("returns 0 when there are no vowels", () => {
    expect(countVowels("xyz")).toBe(0);
  });

  it("is case-insensitive", () => {
    expect(countVowels("AEIOU")).toBe(5);
    expect(countVowels("aeiou")).toBe(5);
  });

  it("handles an empty string", () => {
    expect(countVowels("")).toBe(0);
  });

  it("counts vowels in a sentence with spaces", () => {
    expect(countVowels("Hello World")).toBe(3);
  });

  it("does not count y as a vowel", () => {
    expect(countVowels("rhythm")).toBe(0);
  });
});
