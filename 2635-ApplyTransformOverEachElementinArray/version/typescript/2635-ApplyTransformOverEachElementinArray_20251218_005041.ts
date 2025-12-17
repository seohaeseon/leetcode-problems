// Last updated: 2025. 12. 18. 오전 12:50:41
1function map(arr: number[], fn: (n: number, i: number) => number): number[] {
2    const returnedArray  = [];
3
4    for (let i = 0; i < arr.length; i += 1) {
5        returnedArray[i] = fn(arr[i], i);
6    }
7
8    return returnedArray;
9};