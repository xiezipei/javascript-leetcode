/**
 * 数组去重
 * @param arr 数组
 * @return 去重后的数组
 */
export function getArrayUnique(arr: any[]): any[] {
    return [...new Set(arr)];
}
