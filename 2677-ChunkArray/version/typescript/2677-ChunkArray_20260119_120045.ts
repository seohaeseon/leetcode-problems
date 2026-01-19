// Last updated: 2026. 1. 19. 오후 12:00:45
1type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
2type Obj = Record<string, JSONValue> | Array<JSONValue>;
3
4function chunk(arr: Obj[], size: number): Obj[][] { 
5    const outerArr = [];
6
7    for (let i = 0; i < arr.length; i += size) {
8        outerArr.push(arr.slice(i, i + size));
9    }
10
11    return outerArr;
12};
13