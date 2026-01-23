// Last updated: 2026. 1. 24. 오전 12:49:59
1const construct2DArray = (original: number[], m: number, n: number): (number[] | null)[] => {
2    if (original.length !== m * n) return [];
3
4    const res = Array.from({length: m}, () => Array(n));
5
6    for (let i = 0; i < m; i += 1) {
7        for (let j = 0; j < n; j += 1) {
8            res[i][j] = original[i * n + j];
9        }
10    }
11
12    return res;
13}