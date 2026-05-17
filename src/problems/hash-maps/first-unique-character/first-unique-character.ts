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
  // create an object to store character counts
  const counts: Record<string, number> = {};

  // normalize the string so uppercase/lowercase match
  str = str.toLowerCase();

  console.log("normalized string:", str);

  // FIRST LOOP:
  // count how many times each character appears
  for (const char of str) {
    // if the character exists already:
    // increase the count
    // otherwise:
    // start at 1
    counts[char] = (counts[char] || 0) + 1;

    // helpful debug log
    console.log("building counts:", counts);
  }

  console.log("final counts object:", counts);

  // SECOND LOOP:
  // go through the string again in original order
  for (const char of str) {
    console.log("checking character:", char);
    console.log("character count:", counts[char]);

    // if this character appeared only once:
    // return it immediately
    if (counts[char] === 1) {
      console.log("first unique character found:", char);

      return char;
    }
  }

  // if we finished the loop:
  // no unique characters exist
  console.log("no unique character found");

  return null;
}

console.log(firstUniqueCharacter("aabbcdde"));
// console.log(firstUniqueCharacter("aabbcc"));
// console.log(firstUniqueCharacter("AaBbCcDdE"));
// console.log(firstUniqueCharacter("z"));
// console.log(firstUniqueCharacter("zabbcc"));
// console.log(firstUniqueCharacter(""));