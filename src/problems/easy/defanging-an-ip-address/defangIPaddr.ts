/**
 * IP地址无效化
 * 
 * @problem
 * https://leetcode-cn.com/problems/defanging-an-ip-address/
 * 
 * @tag
 * String
 * 
 * @param address IP地址
 * @returns 字符串
 */
export function defangIPaddr(address: string): string {
    return address.replace(/\./g, '[.]');   // 用正则替换
}