/**
 * 数组去重
 * @param arr 数组
 * @return 去重数组
 */
export function getArrayUnique(arr: any[]): any[] {
    return [...new Set(arr)];
}
