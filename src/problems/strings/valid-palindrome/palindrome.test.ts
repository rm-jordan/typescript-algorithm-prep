import { describe, expect, it } from "vitest";
import { isPalindrome } from "./palindrome.js";

describe("isPalindrome", () => {
  it("returns true for a palindrome regardless of capitalization", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("ignores spaces", () => {
    expect(isPalindrome("Taco Cat")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(isPalindrome("not a palindrome")).toBe(false);
  });

  it("handles a single character", () => {
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome("Z")).toBe(true);
  });

  it("handles an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("handles a string with only spaces", () => {
    expect(isPalindrome("   ")).toBe(true);
  });

  it("handles two-character strings", () => {
    expect(isPalindrome("aa")).toBe(true);
    expect(isPalindrome("Ab")).toBe(false);
  });

  it("is case-insensitive for mixed-case palindromes", () => {
    expect(isPalindrome("Noon")).toBe(true);
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
  });

  it("returns false when characters differ after normalization", () => {
    expect(isPalindrome("abcd")).toBe(false);
    expect(isPalindrome("ab ca")).toBe(false);
  });
});
