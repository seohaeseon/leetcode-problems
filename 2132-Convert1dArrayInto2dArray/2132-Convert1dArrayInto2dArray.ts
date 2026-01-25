// Last updated: 2026. 1. 26. 오전 12:00:07
const construct2DArray = (original: number[], m: number, n: number): (number[] | null)[] => {
    if (original.length !== m * n) return [];

    const res = Array.from({length: m}, () => Array(n));

    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            res[i][j] = original[i * n + j];
        }
    }

    return res;
}