export function restoreString(s: string, indices: number[]): string {
    let result = new Array(s.length);
    for (let i = 0; i < result.length; i++) {
        result[i] = s[indices.indexOf(i)];
    }
    return result.join('');
}