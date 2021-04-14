export const sortedSquares = function (A: any[]) {
    return A.map(item => item * item).sort((a, b) => a - b);
}