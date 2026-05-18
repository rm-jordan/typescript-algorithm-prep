/*
Hint: two pointers

Write a function that moves all zeroes in an array
to the end while keeping the order of non-zero
elements the same.

Requirements:
- Return a new array
- Preserve original order

Example:
Input:
[0, 1, 0, 3, 12]

Output:
[1, 3, 12, 0, 0]
*/

export function moveZeroes(arr: number[]): number[] {
  // suggestion is collect all non zero values, add zeroes afterwards
  const result: number[] = [];

  // count zeroes
  let zeroCount = 0;

  // loop through array
  for (const num of arr) {
    // if non-zero:
    if (num !== 0) {
      result.push(num);
    }
    // push into result
    if (num === 0) {
      zeroCount++;
    }
    // otherwise:
    console.log("zeroCount", zeroCount);
    // increase zeroCount
  }

  // after loop:
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }
  // append zeroes to result
  return result;
}




console.log(moveZeroes([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]
// console.log(moveZeroes([0, 0, 1]));
// // [1, 0, 0]
// console.log(moveZeroes([1, 2, 3]));
// // [1, 2, 3]
// console.log(moveZeroes([0, 0, 0]));
// // [0, 0, 0]
// console.log(moveZeroes([]));
// // []
// console.log(moveZeroes([4, 0, 5, 0, 0, 3]));
// // [4, 5, 3, 0, 0, 0]