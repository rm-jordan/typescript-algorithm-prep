# ts-algo-prep

TypeScript environment for algorithm interview practice. No frontend — write solutions, run tests.

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
| `npm run run src/problems/two-sum/solution.ts` | Run a single file with `tsx` |

## Adding a problem

1. Copy `src/problems/_template/` to `src/problems/<slug>/`
2. Implement `solution.ts` and fill in `solution.test.ts`
3. Run `npm test`

## Helpers

- `src/lib/list-node.ts` — `ListNode`, `listFromArray`, `listToArray`
- `src/lib/tree-node.ts` — `TreeNode`, `treeFromArray`

## Example

`src/problems/two-sum/` includes a working Two Sum solution and tests.
