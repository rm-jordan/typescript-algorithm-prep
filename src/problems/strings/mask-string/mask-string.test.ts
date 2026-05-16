import { describe, expect, it } from "vitest";
import { maskString } from "./mask-string.js";

describe("maskString", () => {
  it("masks all but the last four characters", () => {
    expect(maskString("1234567812345678")).toBe("############5678");
  });

  it("returns the string unchanged when length is 4 or less", () => {
    expect(maskString("abcd")).toBe("abcd");
    expect(maskString("abc")).toBe("abc");
    expect(maskString("a")).toBe("a");
  });

  it("masks exactly one character when length is 5", () => {
    expect(maskString("12345")).toBe("#2345");
  });

  it("handles an empty string", () => {
    expect(maskString("")).toBe("");
  });

  it("masks a longer string correctly", () => {
    expect(maskString("secret1234")).toBe("######1234");
  });
});
