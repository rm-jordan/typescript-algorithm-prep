/*
Hint: hash map

Write a function that returns the indices of two numbers
that add up to the target value.

Requirements:
- Assume exactly one valid answer exists
- Return the indices as an array
- Do not use the same element twice

Example:
Input:
nums = [2, 7, 11, 15]
target = 9

Output:
[0, 1]
*/

export function twoSum(nums: number[], target: number): number[] {
  // object to store:
  // number -> index
  const seen: Record<number, number> = {};

  // loop through array using index
  for (let i = 0; i < nums.length; i++) {
    // current number we are checking
    const current = nums[i]!;

    // calculate what number we need
    // to reach the target
    const needed = target - current;

    // console.log("current:", current);
    // console.log("needed:", needed);
    // console.log("seen so far:", seen);

    // check:
    // have we already seen the needed number?
    if (seen[needed] !== undefined) {
      console.log("match found!");
      console.log("indexes:", seen[needed], i);

      // return:
      // [index of needed number, current index]
      return [seen[needed], i];
    }

    // otherwise:
    // store current number and its index
    seen[current] = i;

    console.log("updated seen object:", seen);
  }

  // fallback
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]
// console.log(twoSum([1, 5, 8, 2], 10)); // [2, 3]
// console.log(twoSum([10, 20, 30, 40], 70)); // [2, 3]
// console.log(twoSum([-1, -2, -3, -4, -5], -8)); // [2, 4]