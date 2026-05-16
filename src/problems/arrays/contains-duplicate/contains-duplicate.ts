/*
Hint: hash set

Write a function that returns true if any value
appears more than once in the array.

Return false if all values are unique.

Example 1:
Input:
[1, 2, 3, 1]

Output:
true

Example 2:
Input:
[1, 2, 3, 4]

Output:
false
*/

export function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    // show current number being checked
    console.log("checking:", num);

    // show current Set contents
    console.log("seen currently:", [...seen]);

    // check if duplicate exists
    if (seen.has(num)) {
      console.log("duplicate found:", num);

      return true;
    }

    // add current number to Set
    seen.add(num);

    // show Set after adding
    console.log("after add:", [...seen]);
  }

  console.log("no duplicates found");

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1]));
console.log(containsDuplicate([7]));
console.log(containsDuplicate([]));
console.log(containsDuplicate([1, 2, 3, 4, 5, 1]));