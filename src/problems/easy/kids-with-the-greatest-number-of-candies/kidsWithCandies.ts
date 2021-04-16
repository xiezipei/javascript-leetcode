/**
 * 拥有最多糖果的孩子
 * 
 * @problem
 * https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
 * 
 * @tag
 * Array
 * 
 * @param candies 数字数组
 * @param extraCandies 数字
 * @returns 布尔值数组
 */
export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies);   // 求出最大数
    return candies.map(item => (item + extraCandies >= max) ? true : false);    // 数组遍历判断映射
}