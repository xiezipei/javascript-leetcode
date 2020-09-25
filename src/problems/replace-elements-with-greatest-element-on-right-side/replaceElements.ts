function replaceElements(arr: number[]): number[] {
    let brr = [];
    while(arr.length > 1) {
        arr.shift();
        let max = Math.max(...arr);
        brr.push(max);
    }
    brr.push(-1);
    return brr;
};