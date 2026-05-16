/**
 * LeetCode 1 — Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * Given nums and target, return indices of the two numbers that add up to target.
 */
export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;
    const j = seen.get(complement);

    if (j !== undefined) {
      return [j, i];
    }

    seen.set(nums[i]!, i);
  }

  return [];
}
