/*
Hint: sliding window

Write a function that returns the largest sum of
consecutive numbers of length "size".

Requirements:
- Use consecutive values only
- Return 0 if the array is smaller than the window size

Example:
Input:
arr = [1, 2, 3, 4, 5]
size = 2

Output:
9

Explanation:
4 + 5 = 9 is the largest consecutive sum
*/

export function maxSubArraySum(arr: number[], size: number): number {
  // step 1: edge case: if the array is smaller than the window size, return 0
  if (arr.length < size) return 0;

  // step 2: track the current window total
  let currentSum = 0;

  // step 3: track the largest sum found
  let maxSum = 0;
  
  // step 4: build the first window
  // example:
  // if size = 2
  // add arr[0] + arr[1]
  for (let i = 0; i < size; i++) {
    currentSum += arr[i];
  }
  
  // step 5: the first window is the largest seen so far
  maxSum = currentSum;
  
  // step 6: slide the window across the array
  for (let i = size; i < arr.length; i++) {
    // step 7: remove the value leaving the window
    // step 8: add the new value entering the window
    currentSum = currentSum - arr[i - size] + arr[i];
    
    // step 9: if the new window sum is larger, update maxSum
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  
  // step 10: return the largest consecutive sum found  
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 4, 5], 2));
// 9
console.log(maxSubArraySum([1, 2], 3));
// 0
console.log(maxSubArraySum([5], 2));
// 0
console.log(maxSubArraySum([], 1));
// 0
console.log(maxSubArraySum([10, 9, 1, 2], 2));
// 19