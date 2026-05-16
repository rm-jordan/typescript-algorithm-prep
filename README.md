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

Each problem file includes a `Hint:` comment with the suggested pattern.

| Folder | Function | Style | Topic |
|--------|----------|-------|-------|
| `find-missing-number` | `findMissingNumber` | math / hash set | Find the missing value in 1..n |
| `mask-string` | `maskString` | string manipulation | Mask all but the last 4 characters |
| `first-unique-character` | `firstUniqueCharacter` | hash map | First non-repeating character (case-insensitive) |
| `sort-odd-numbers` | `sortOddNumbers` | array manipulation | Sort odds in place, evens stay fixed |
| `two-sum` | `twoSum` | hash map | Two indices that sum to target |
| `group-anagrams` | `groupAnagrams` | hash map | Group words that are anagrams |
| `move-zeroes` | `moveZeroes` | two pointers | Move zeroes to the end (new array) |
| `find-longest-word` | `findLongestWord` | string parsing | Longest word in a sentence (ignore punctuation) |
| `valid-parentheses` | `isValidParentheses` | stack | Valid `()[]{}` bracket sequences |
| `remove-duplicates` | `removeDuplicates` | hash set | Remove duplicates, preserve order |
| `valid-palindrome` | `isPalindrome` | two pointers | Palindrome check (ignore spaces & case) |
| `largest-sum-consecutive-num` | `maxSubArraySum` | sliding window | Max sum of consecutive subarray of size k |
| `count-character-frequency` | `maxSubArraySum` | sliding window | Same sliding-window problem as above |
| `contains-duplicate` | `containsDuplicate` | hash set | Any value appears more than once |
| `fizz-buzz` | `fizzBuzz` | iteration (simulation) | FizzBuzz from 1 to n |
| `merge-sorted-arrays` | `mergeSortedArrays` | two pointers | Merge two sorted arrays without `sort()` |
| `largest-in-each-array` | `largestInEachArray` | array iteration | Largest number in each nested array |
| `reverse-words` | `reverseWords` | string manipulation | Reverse word order in a sentence |
| `intersection` | `intersection` | hash set | Unique common values between two arrays |
| `count-vowels` | `countVowels` | string iteration | Count vowels (case-insensitive) |

## Adding a problem

1. Copy `src/problems/_template/` to `src/problems/<slug>/`
2. Rename files, add the problem comment block, export your function, and write tests
3. Run `npm test`

## Helpers

- `src/lib/list-node.ts` — `ListNode`, `listFromArray`, `listToArray`
- `src/lib/tree-node.ts` — `TreeNode`, `treeFromArray`

Use these when a problem involves linked lists or binary trees.
