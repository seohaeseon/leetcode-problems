// Last updated: 2026. 1. 13. 오후 3:42:38
type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return (await promise1) + (await promise2);
}; 

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */