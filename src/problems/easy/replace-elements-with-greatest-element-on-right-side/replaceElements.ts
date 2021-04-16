/**
 * 将每个元素替换为右侧最大元素
 * 
 * @problem
 * https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/
 * 
 * @tag
 * Array
 * 
 * @param arr 数字数组
 * @returns 数字数组
 */
export function replaceElements(arr: number[]): number[] {
    let brr = [];   // 定义一个新数组
    while(arr.length > 1) {
        arr.shift(); // 把第一个弹出
        const max = Math.max(...arr); // 弹出后在数组中求出最大值 
        brr.push(max);  // 把最大值push进新数组
    }
    brr.push(-1);   // 最后把`-1`push进去
    return brr;
}