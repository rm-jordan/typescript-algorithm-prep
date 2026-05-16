export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Build a binary tree from a level-order array (LeetCode style).
 * Use `null` for missing children, e.g. [3, 9, 20, null, null, 15, 7].
 */
export function treeFromArray<T extends number | null>(values: T[]): TreeNode | null {
  if (values.length === 0 || values[0] == null) {
    return null;
  }

  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < values.length) {
    const node = queue.shift()!;

    if (i < values.length && values[i] != null) {
      node.left = new TreeNode(values[i] as number);
      queue.push(node.left);
    }
    i++;

    if (i < values.length && values[i] != null) {
      node.right = new TreeNode(values[i] as number);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}
