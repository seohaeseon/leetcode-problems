// Last updated: 2025. 12. 19. 오후 10:36:34
1type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
2
3function argumentsLength(...args: JSONValue[]): number {
4    return args.length;
5};
6
7/**
8 * argumentsLength(1, 2, 3); // 3
9 */