import { describe, expect, it } from "vitest";
import { isValidParentheses } from "./valid-parentheses.js";

describe("isValidParentheses", () => {
  it("returns true for valid bracket sequences", () => {
    expect(isValidParentheses("()[]{}")).toBe(true);
    expect(isValidParentheses("([{}])")).toBe(true);
  });

  it("returns false for mismatched brackets", () => {
    expect(isValidParentheses("(]")).toBe(false);
    expect(isValidParentheses("([)]")).toBe(false);
  });

  it("returns true for an empty string", () => {
    expect(isValidParentheses("")).toBe(true);
  });

  it("returns false for an unmatched opening bracket", () => {
    expect(isValidParentheses("(")).toBe(false);
    expect(isValidParentheses("({[")).toBe(false);
  });

  it("returns false for an unmatched closing bracket", () => {
    expect(isValidParentheses(")")).toBe(false);
    expect(isValidParentheses("()]")).toBe(false);
  });

  it("handles nested valid sequences", () => {
    expect(isValidParentheses("{[()()]}")).toBe(true);
  });

  it("returns false when closing brackets appear before opening", () => {
    expect(isValidParentheses(")(")).toBe(false);
  });
});
