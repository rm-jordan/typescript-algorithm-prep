/*
Hint: hash map (frequency count)

Write a function that returns the first character
that does not repeat in a string.

Requirements:
- Ignore capitalization
- Return null if every character repeats

Example:
Input:
"aabbcdde"

Output:
"c"

Example:
Input:
"aabbcc"

Output:
null
*/

export function firstUniqueCharacter(str: string): string | null {
  // your code here
  const counts: Record<string, number> = {};

   // convert the string to lowercase

  // first loop:
  // go through each character in the string

  // if the character already exists in the counts object:
  // increase its count

  // otherwise:
  // start its count at 1

  // after the first loop:
  // the counts object should look something like:
  // { a: 2, b: 2, c: 1 }

  // second loop:
  // go through the string again in original order

  // check each character's count

  // if a character count equals 1:
  // return that character immediately

  // if the loop finishes:
  // return null because no unique character exists

  return null;
}

console.log(firstUniqueCharacter("aabbcdde"));
console.log(firstUniqueCharacter("aabbcc"));
console.log(firstUniqueCharacter("AaBbCcDdE"));
console.log(firstUniqueCharacter("z"));
console.log(firstUniqueCharacter("zabbcc"));
console.log(firstUniqueCharacter(""));