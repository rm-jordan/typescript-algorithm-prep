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
| `npm test -- two-sum` | Run tests for one problem (match folder name) |
| `npm run run src/problems/two-sum/two-sum.ts` | Run a single file with `tsx` |

## Project structure

Each problem lives in its own folder under `src/problems/`:

```
src/problems/<slug>/
  <name>.ts        # problem description + exported stub
  <name>.test.ts   # Vitest tests
```

Most folders use matching names (e.g. `two-sum/two-sum.ts`). A few use shorter filenames: `valid-palindrome/palidrome.ts`, `largest-sum-consecutive-num/largest.ts`, `count-character-frequency/count.ts`.

Stubs export the function and return a placeholder so tests compile; implement the logic and tests will pass.

## Problems

| Folder | Function | Topic |
|--------|----------|-------|
| `find-missing-number` | `findMissingNumber` | Find the missing value in 1..n |
| `mask-string` | `maskString` | Mask all but the last 4 characters |
| `first-unique-character` | `firstUniqueCharacter` | First non-repeating character (case-insensitive) |
| `sort-odd-numbers` | `sortOddNumbers` | Sort odds in place, evens stay fixed |
| `two-sum` | `twoSum` | Two indices that sum to target |
| `group-anagrams` | `groupAnagrams` | Group words that are anagrams |
| `move-zeroes` | `moveZeroes` | Move zeroes to the end (new array) |
| `find-longest-word` | `findLongestWord` | Longest word in a sentence (ignore punctuation) |
| `valid-parentheses` | `isValidParentheses` | Valid `()[]{}` bracket sequences |
| `remove-duplicates` | `removeDuplicates` | Remove duplicates, preserve order |
| `valid-palindrome` | `isPalindrome` | Palindrome check (ignore spaces & case) |
| `largest-sum-consecutive-num` | `maxSubArraySum` | Max sum of consecutive subarray of size k |
| `count-character-frequency` | `maxSubArraySum` | Same sliding-window problem as above |

## Adding a problem

1. Copy `src/problems/_template/` to `src/problems/<slug>/`
2. Rename files, add the problem comment block, export your function, and write tests
3. Run `npm test`

## Helpers

- `src/lib/list-node.ts` — `ListNode`, `listFromArray`, `listToArray`
- `src/lib/tree-node.ts` — `TreeNode`, `treeFromArray`

Use these when a problem involves linked lists or binary trees.
