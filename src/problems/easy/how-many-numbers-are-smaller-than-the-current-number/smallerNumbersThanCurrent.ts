/**
 * 有多少小于当前数字的数字
 * 
 * @problem
 * https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * 
 * @param nums 数字数组
 * @returns 数字数组
 */
export function smallerNumbersThanCurrent(nums: number[]): number[] {
    return nums.map((item) => { // 由于相当于求出数组的映射，所以用了map方法；每次遍历得到元素 `item`
        let count = 0;  // 定义一个计数器
        for (let i = 0; i < nums.length; i++) { // 每次遍历得到元素 `nums[i]`
            if (nums[i] < item) {   // 判断 `nums[i]` 是否小于 `item`，算入计数器
                count++;
            }
        }
        return count;
    })
}
