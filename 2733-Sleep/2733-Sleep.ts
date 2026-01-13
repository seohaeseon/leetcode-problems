// Last updated: 2026. 1. 13. 오후 3:42:45
async function sleep(millis: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */