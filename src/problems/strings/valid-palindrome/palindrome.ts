/*
Hint: two pointers

Write a function that checks whether a string is a palindrome.

Requirements:
- Ignore spaces
- Ignore capitalization
- Return true or false

A palindrome reads the same forward and backward.

Example 1:
Input:
"Racecar"

Output:
true

Example 2:
Input:
"hello"

Output:
false
*/

export function isPalindrome(str: string): boolean {
  // Step 1: conver the string to a lowercase and remove all non alphanumeric characters
  // compare characters and if not equal return false, move in, if loop finishes return true
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }

    left++;
    right--;
  }



  return true;
}



console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("nurses run")); // true
console.log(isPalindrome("A man a plan a canal Panama")); // true