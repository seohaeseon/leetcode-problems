// Last updated: 2025. 12. 18. 오전 1:08:52
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr = [];

    for (const idx in arr) {
        if (fn(arr[idx], +idx)) filteredArr.push(arr[idx]);
    }

    return filteredArr;
};