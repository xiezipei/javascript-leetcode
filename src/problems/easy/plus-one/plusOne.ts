/**
 * 加一
 * 
 * @problem
 * https://leetcode-cn.com/problems/plus-one/
 * 
 * @tag
 * Array, BigInt
 * 
 * @param digits 非空整数数组
 * @returns 数字数组
 */
export const plusOne = function(digits: any[]): number[] {
    // 思路：
    // 1. 转成BigInt类型再加一（考虑JS精度问题）
    // 2. 转为字符
    // 3. 字符转为数组

    let num = BigInt(digits.join(''));  // 这里用到最新语法api需要修改项目ts配置文件 `"lib": ["ESNext"]`
    let str = String(num + 1n);
    let arr = str.split('');
    return arr.map(str => Number(str));
}