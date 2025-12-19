// Last updated: 2025. 12. 19. 오후 10:39:44
1type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
2
3const argumentsLength = (...args: JSONValue[]): number => args.length;