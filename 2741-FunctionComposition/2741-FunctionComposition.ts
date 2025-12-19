// Last updated: 2025. 12. 19. 오후 10:05:21
type F = (x: number) => number;

function compose(functions: F[]): F {

    return function(x) {
        let result = x;

        for (let i = functions.length - 1; i >= 0; i -= 1) {
            result = functions[i](result);
        }

        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */