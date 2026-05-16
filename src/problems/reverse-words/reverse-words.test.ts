import { describe, expect, it } from "vitest";
import { reverseWords } from "./reverse-words.js";

describe("reverseWords", () => {
  it("reverses the order of words in a sentence", () => {
    expect(reverseWords("hello world today")).toBe("today world hello");
  });

  it("handles a single word", () => {
    expect(reverseWords("hello")).toBe("hello");
  });

  it("trims extra whitespace", () => {
    expect(reverseWords("  hello   world  ")).toBe("world hello");
  });

  it("handles an empty string", () => {
    expect(reverseWords("")).toBe("");
  });

  it("handles a string with only spaces", () => {
    expect(reverseWords("   ")).toBe("");
  });

  it("preserves single spaces between words", () => {
    expect(reverseWords("the quick brown fox")).toBe("fox brown quick the");
  });
});
