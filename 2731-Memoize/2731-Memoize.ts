// Last updated: 2025. 12. 22. 오후 11:29:53
type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cachedValues: {[key: string]: number} = {};

    return function(...args) {
        const targetKey = JSON.stringify(args);    
        return cachedValues[targetKey] ?? (cachedValues[targetKey] = fn(...args));
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */