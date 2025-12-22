// Last updated: 2025. 12. 22. 오후 11:28:08
1type Fn = (...params: number[]) => number
2
3function memoize(fn: Fn): Fn {
4    const cachedValues: {[key: string]: number} = {};
5
6    return function(...args) {
7        const targetKey = JSON.stringify(args);    
8        return cachedValues[targetKey] ?? (cachedValues[targetKey] = fn(...args));
9    }
10}
11
12/** 
13 * let callCount = 0;
14 * const memoizedFn = memoize(function (a, b) {
15 *	 callCount += 1;
16 *   return a + b;
17 * })
18 * memoizedFn(2, 3) // 5
19 * memoizedFn(2, 3) // 5
20 * console.log(callCount) // 1 
21 */