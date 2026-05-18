/*
Hint: two pointers

Write a function that merges two sorted arrays
into one sorted array.

Requirements:
- Return a new sorted array
- Do not use sort()

Example:
Input:
arr1 = [1, 3, 5]
arr2 = [2, 4, 6]

Output:
[1, 2, 3, 4, 5, 6]
*/

export function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  // your code here
  // we will set left and right pointers 
  let left = 0;
  // console.log(left, "left");
  let right = 0;
  // console.log(right, "right");
  const result: number[] = [];
  // console.log(result, "result");

  // loop while both arrays still have values
while (left < arr1.length && right < arr2.length) {
  // compare the values at the left and right pointers
  if (arr1[left]! < arr2[right]!) {
    result.push(arr1[left]!);
    left++;
  } else {
    result.push(arr2[right]!);
    right++;
  }
}

while (left < arr1.length) {
    // push remaining arr1 values
    result.push(arr1[left]!);
    // move left pointer forward
  left++;
}


while ( right < arr2.length) {
  // push remaining arr2 values
  result.push(arr2[right]!);
    // move right pointer forward
    right++;
}

  return result;
}



console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 7], [3, 4, 5]));
// [1, 2, 3, 4, 5, 7]
console.log(mergeSortedArrays([], [1, 2, 3]));
// [1, 2, 3]
console.log(mergeSortedArrays([1, 2, 3], []));
// [1, 2, 3]