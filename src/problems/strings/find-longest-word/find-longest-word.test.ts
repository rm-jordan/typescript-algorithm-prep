import { describe, expect, it } from "vitest";
import { findLongestWord } from "./find-longest-word.js";

describe("findLongestWord", () => {
  it("returns the longest word in a sentence", () => {
    expect(findLongestWord("The quick brown fox jumped over the lazy dog")).toBe("jumped");
  });

  it("returns the first word when there is a tie", () => {
    expect(findLongestWord("cat dog bat")).toBe("cat");
  });

  it("ignores punctuation attached to words", () => {
    expect(findLongestWord("Hello, world! How are you?")).toBe("Hello");
  });

  it("handles a single word", () => {
    expect(findLongestWord("algorithm")).toBe("algorithm");
  });

  it("handles an empty string", () => {
    expect(findLongestWord("")).toBe("");
  });

  it("strips punctuation from the returned word", () => {
    expect(findLongestWord("wow!!! incredible???")).toBe("incredible");
  });
});
