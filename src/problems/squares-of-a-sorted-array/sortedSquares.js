/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(item => {
        return (item * item)
    }).sort((a, b) => {
        return (a - b)
    })
};