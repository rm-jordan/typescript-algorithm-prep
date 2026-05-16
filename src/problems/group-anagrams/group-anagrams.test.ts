import { describe, expect, it } from "vitest";
import { groupAnagrams } from "./group-anagrams.js";

/** Normalize groups for order-independent comparison. */
function normalize(groups: string[][]): string[][] {
  return groups.map((g) => [...g].sort()).sort((a, b) => a.join().localeCompare(b.join()));
}

describe("groupAnagrams", () => {
  it("groups anagrams together", () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(normalize(result)).toEqual(
      normalize([
        ["eat", "tea", "ate"],
        ["tan", "nat"],
        ["bat"],
      ]),
    );
  });

  it("returns each word in its own group when there are no anagrams", () => {
    const result = groupAnagrams(["abc", "def", "ghi"]);
    expect(normalize(result)).toEqual(normalize([["abc"], ["def"], ["ghi"]]));
  });

  it("handles an empty array", () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  it("handles a single word", () => {
    expect(groupAnagrams(["solo"])).toEqual([["solo"]]);
  });

  it("groups multiple words that share the same letters", () => {
    const result = groupAnagrams(["listen", "silent", "enlist"]);
    expect(normalize(result)).toEqual(normalize([["listen", "silent", "enlist"]]));
  });
});
