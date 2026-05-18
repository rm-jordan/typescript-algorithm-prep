/*
Hint: stack

Write a function that determines whether a string
containing brackets is valid.

A string is valid if:
- Every opening bracket has a matching closing bracket
- Brackets close in the correct order

Possible brackets:
() [] {}

Example 1:
Input:
"()[]{}"

Output:
true

Example 2:
Input:
"(]"

Output:
false

Example 3:
Input:
"([{}])"

Output:
true
*/

export function isValidParentheses(str: string): boolean {
  // stack stores opening brackets
  const stack: string[] = [];

  // closing bracket -> matching opening bracket
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // loop through each character
  for (const char of str) {
    console.log("current char:", char);

    // if opening bracket:
    // push onto stack
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);

      console.log("pushed to stack:", stack);
    }

    // if closing bracket:
    // pop and compare
    if (char in pairs) {
      const top = stack.pop();

      console.log("top popped:", top);
      console.log("expected:", pairs[char]);

      // if mismatch:
      // invalid parentheses
      if (top !== pairs[char]) {
        return false;
      }
    }
  }

  // valid only if stack is empty
  return stack.length === 0;
}

console.log(isValidParentheses("()")); // true
// console.log(isValidParentheses("()[]{}")); // true
// console.log(isValidParentheses("(]")); // false
// console.log(isValidParentheses("([{}])")); // true