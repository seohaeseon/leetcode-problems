// Last updated: 2025. 12. 18. 오전 1:05:19
1type Fn = (n: number, i: number) => any
2
3function filter(arr: number[], fn: Fn): number[] {
4    const filteredArr = [];
5
6    for (const idx in arr) {
7        if (fn(arr[idx], +idx)) filteredArr.push(arr[idx]);
8    }
9
10    return filteredArr;
11};