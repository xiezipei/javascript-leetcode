/**
 * 两数之和
 * @param nums 数字数组
 * @param target 目标数字
 * @returns 数组
 */
export const twoSum = function(nums: [], target: number) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
