/**
 * 移除元素
 * 
 * @problem
 * https://leetcode-cn.com/problems/remove-element/
 * 
 * @tag
 * Array, splice
 * 
 * @param nums 
 * @param val 
 * @returns 
 */
export function removeElement(nums: number[], val: number): number {
    const l = nums.length;
    for (let i = 0; i < l; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);  // 删除当前元素
            i--;    // 循环次数减一
        }
    }
    return nums.length; // 返回最终数组长度
}