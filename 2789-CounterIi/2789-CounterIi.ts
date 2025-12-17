// Last updated: 2025. 12. 18. 오전 12:05:27
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let count = init;
    return {
        increment: () => (count += 1),
        decrement: () => count -= 1,
        reset: () => (count = init),
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */