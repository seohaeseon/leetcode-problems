// Last updated: 2026. 2. 10. 오후 11:56:48
1type F = (...args: number[]) => void
2
3function debounce(fn: F, t: number): F {
4    
5    let timeoutId: ReturnType<typeof setTimeout>;
6
7    return function(...args) {
8        
9        clearTimeout(timeoutId);
10        
11        timeoutId = setTimeout(fn, t, ...args);
12    }
13};
14
15
16
17/**
18 * const log = debounce(console.log, 100);
19 * log('Hello'); // cancelled
20 * log('Hello'); // cancelled
21 * log('Hello'); // Logged at t=100ms
22 */