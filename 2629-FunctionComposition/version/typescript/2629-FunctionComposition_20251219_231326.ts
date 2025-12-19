// Last updated: 2025. 12. 19. 오후 11:13:26
1type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
2type OnceFn = (...args: JSONValue[]) => JSONValue | undefined
3
4function once(fn: Function): OnceFn {
5    let count = 0;
6    
7    return function (...args) {
8        if (count >= 1) return undefined;
9        count += 1;      
10        return fn(...args);
11    };
12}
13
14/**
15 * let fn = (a,b,c) => (a + b + c)
16 * let onceFn = once(fn)
17 *
18 * onceFn(1,2,3); // 6
19 * onceFn(2,3,6); // returns undefined without calling fn
20 */