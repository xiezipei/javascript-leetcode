/**
 * 转换成小写字母
 * 
 * @problem
 * https://leetcode-cn.com/problems/to-lower-case/
 * 
 * @tag
 * String
 * 
 * @param str 字符串
 * @returns 字符串
 */
export function toLowerCase(str: string): string {
    return str.toLocaleLowerCase(); // 直接使用js内置方法
}