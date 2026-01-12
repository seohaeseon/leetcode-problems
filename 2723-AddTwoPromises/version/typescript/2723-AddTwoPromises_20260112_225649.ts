// Last updated: 2026. 1. 12. 오후 10:56:49
1type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
2type Fn = (...args: JSONValue[]) => void
3
4
5const cancellable = (fn: Fn, args: JSONValue[], t: number): Function => {
6    const timeoutId = setTimeout(fn, t, ...args);
7    
8    return () => {
9        clearTimeout(timeoutId);
10    };
11}
12
13/**
14 *  const result = [];
15 *
16 *  const fn = (x) => x * 5;
17 *  const args = [2], t = 20, cancelTimeMs = 50;
18 *
19 *  const start = performance.now();
20 *
21 *  const log = (...argsArr) => {
22 *      const diff = Math.floor(performance.now() - start);
23 *      result.push({"time": diff, "returned": fn(...argsArr)});
24 *  }
25 *       
26 *  const cancel = cancellable(log, args, t);
27 *
28 *  const maxT = Math.max(t, cancelTimeMs);
29 *           
30 *  setTimeout(cancel, cancelTimeMs);
31 *
32 *  setTimeout(() => {
33 *      console.log(result); // [{"time":20,"returned":10}]
34 *  }, maxT + 15)
35 */