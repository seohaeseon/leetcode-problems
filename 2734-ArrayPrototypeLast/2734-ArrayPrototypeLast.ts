// Last updated: 2026. 1. 26. 오전 12:00:03
interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    return this.length > 0 ? this.at(-1) : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
