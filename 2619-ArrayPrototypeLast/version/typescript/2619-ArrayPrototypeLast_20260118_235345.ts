// Last updated: 2026. 1. 18. 오후 11:53:45
1interface Array<T> {
2    last(): T | -1;
3}
4
5Array.prototype.last = function() {
6    return this.length > 0 ? this.at(-1) : -1;
7};
8
9/**
10 * const arr = [1, 2, 3];
11 * arr.last(); // 3
12 */
13