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
  const stack: string[] = []
  console.log("stack", stack)

    // map closing brackets to their matching opening brackets
    const pairs: Record<string, string> = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    console.log("pairs",pairs)

      // loop through each character in the string
  for (const char of str) {
    // next step:
    // if char is an opening bracket, push it onto the stack

    // if char is a closing bracket:
    // pop the top item from the stack
    // check if it matches the expected opening bracket
  }

  // after loop:
  // stack should be empty if everything matched correctly

  return false;
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([{}])")); // true