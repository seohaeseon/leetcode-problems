// Last updated: 2026. 1. 25. 오후 11:59:58
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] { 
    const outerArr = [];

    for (let i = 0; i < arr.length; i += size) {
        outerArr.push(arr.slice(i, i + size));
    }

    return outerArr;
};
