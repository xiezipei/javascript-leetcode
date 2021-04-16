/**
 * 好数对的数目
 * 
 * @problem
 * https://leetcode-cn.com/problems/number-of-good-pairs/
 * 
 * @tag
 * Array
 * 
 * @param nums 数字数组
 * @returns 数字
 */
export function numIdenticalPairs(nums: number[]): number {

    /**
     * 思路：
     * 双循环加判断
     */

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                result++;
            }
        }
    }
    return result;
}