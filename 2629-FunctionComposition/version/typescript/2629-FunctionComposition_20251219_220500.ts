// Last updated: 2025. 12. 19. 오후 10:05:00
1type F = (x: number) => number;
2
3function compose(functions: F[]): F {
4
5    return function(x) {
6        let result = x;
7
8        for (let i = functions.length - 1; i >= 0; i -= 1) {
9            result = functions[i](result);
10        }
11
12        return result;
13    }
14};
15
16/**
17 * const fn = compose([x => x + 1, x => 2 * x])
18 * fn(4) // 9
19 */