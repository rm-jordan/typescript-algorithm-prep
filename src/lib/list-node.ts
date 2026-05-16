export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/** Build a linked list from an array (e.g. [1, 2, 3]). */
export function listFromArray(values: number[]): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;

  for (const val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}

/** Convert a linked list to an array for assertions. */
export function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}
