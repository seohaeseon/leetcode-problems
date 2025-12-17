// Last updated: 2025. 12. 18. 오전 1:08:54
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const returnedArray  = [];

    for (let i = 0; i < arr.length; i += 1) {
        returnedArray[i] = fn(arr[i], i);
    }

    return returnedArray;
};