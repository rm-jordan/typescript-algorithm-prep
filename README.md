# ts-algo-prep

TypeScript environment for algorithm interview practice. No frontend — implement solutions in `src/problems/`, run tests with Vitest.

## Setup

```bash
npm install
```

## Commands

| Command | Description |
|--------|-------------|
| `npm test` | Run tests in watch mode |
| `npm run test:run` | Run tests once (CI-friendly) |
| `npm run typecheck` | Type-check without emitting |
| `npm test -- remove-duplicates` | Run tests for one problem (match folder name) |
| `npm run run src/problems/arrays/remove-duplicates/remove-duplicates.ts` | Run a file with `tsx` (see `console.log` output) |

## Project structure

Problems are grouped by topic. Each problem lives in its own folder:

```
src/problems/<category>/<slug>/
  <name>.ts
  <name>.test.ts
```

A few folders use shorter filenames: `strings/valid-palindrome/palidrome.ts`, `arrays/largest-sum-consecutive-num/largest.ts`, `hash-maps/count-character-frequency/count.ts`.

Stubs export the function and return a placeholder so tests compile; implement the logic and tests will pass.

---

## Arrays

| Folder | Function | Style |
|--------|----------|-------|
| `arrays/remove-duplicates` | `removeDuplicates` | hash set |
| `arrays/contains-duplicate` | `containsDuplicate` | hash set |
| `arrays/move-zeroes` | `moveZeroes` | two pointers |
| `arrays/find-missing-number` | `findMissingNumber` | math / hash set |
| `arrays/largest-in-each-array` | `largestInEachArray` | array iteration |
| `arrays/intersection` | `intersection` | hash set |
| `arrays/sort-odd-numbers` | `sortOddNumbers` | array manipulation |
| `arrays/merge-sorted-arrays` | `mergeSortedArrays` | two pointers |
| `arrays/largest-sum-consecutive-num` | `maxSubArraySum` | sliding window |

## Strings

| Folder | Function | Style |
|--------|----------|-------|
| `strings/count-vowels` | `countVowels` | string iteration |
| `strings/reverse-words` | `reverseWords` | string manipulation |
| `strings/find-longest-word` | `findLongestWord` | string parsing |
| `strings/mask-string` | `maskString` | string manipulation |
| `strings/valid-palindrome` | `isPalindrome` | two pointers |

## Hash maps / frequency counters

| Folder | Function | Style |
|--------|----------|-------|
| `hash-maps/count-character-frequency` | `maxSubArraySum` | sliding window |
| `hash-maps/first-unique-character` | `firstUniqueCharacter` | hash map |
| `hash-maps/two-sum` | `twoSum` | hash map |
| `hash-maps/group-anagrams` | `groupAnagrams` | hash map |

## Stacks

| Folder | Function | Style |
|--------|----------|-------|
| `stacks/valid-parentheses` | `isValidParentheses` | stack |

## Basic logic / math

| Folder | Function | Style |
|--------|----------|-------|
| `basic-logic/fizz-buzz` | `fizzBuzz` | iteration (simulation) |

---

## By pattern (cross-reference)

Some problems fit multiple patterns. Each problem has one folder; use this table to study by technique.

### Sets
- `arrays/remove-duplicates`
- `arrays/contains-duplicate`
- `arrays/intersection`

### Two pointers
- `strings/valid-palindrome`
- `arrays/merge-sorted-arrays`
- `arrays/sort-odd-numbers`
- `arrays/move-zeroes`

### Sliding window
- `arrays/largest-sum-consecutive-num`
- `hash-maps/count-character-frequency` (same problem)

### Nested loops / traversal
- `arrays/largest-in-each-array`
- `hash-maps/group-anagrams`

### Basic logic / math (also)
- `arrays/find-missing-number` (also under Arrays)

## Adding a problem

1. Copy `src/problems/_template/` into the right category folder, e.g. `src/problems/arrays/my-problem/`
2. Rename files, add the problem comment block (`Hint:` + description), export your function, and write tests
3. Run `npm test`

## Helpers

- `src/lib/list-node.ts` — `ListNode`, `listFromArray`, `listToArray`
- `src/lib/tree-node.ts` — `TreeNode`, `treeFromArray`

Use these when a problem involves linked lists or binary trees.
