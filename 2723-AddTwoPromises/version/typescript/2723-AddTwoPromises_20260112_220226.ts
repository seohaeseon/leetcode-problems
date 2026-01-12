// Last updated: 2026. 1. 12. 오후 10:02:26
1async function sleep(millis: number): Promise<void> {
2    return new Promise(resolve => {
3        setTimeout(resolve, millis);
4    });
5}
6
7
8/** 
9 * let t = Date.now()
10 * sleep(100).then(() => console.log(Date.now() - t)) // 100
11 */