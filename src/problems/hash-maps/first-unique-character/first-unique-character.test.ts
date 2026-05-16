import { describe, expect, it } from "vitest";
import { firstUniqueCharacter } from "./first-unique-character.js";

describe("firstUniqueCharacter", () => {
  it("returns the first non-repeating character", () => {
    expect(firstUniqueCharacter("aabbcdde")).toBe("c");
  });

  it("returns null when every character repeats", () => {
    expect(firstUniqueCharacter("aabbcc")).toBe(null);
  });

  it("is case-insensitive", () => {
    expect(firstUniqueCharacter("AaBbCcDdE")).toBe("E");
    expect(firstUniqueCharacter("aAbBcC")).toBe(null);
  });

  it("returns the only character in a single-character string", () => {
    expect(firstUniqueCharacter("z")).toBe("z");
  });

  it("returns the first unique when it appears early", () => {
    expect(firstUniqueCharacter("zabbcc")).toBe("z");
  });

  it("handles an empty string", () => {
    expect(firstUniqueCharacter("")).toBe(null);
  });
});
