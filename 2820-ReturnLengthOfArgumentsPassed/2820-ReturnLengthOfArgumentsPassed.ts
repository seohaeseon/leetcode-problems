// Last updated: 2025. 12. 19. 오후 11:14:38
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

const argumentsLength = (...args: JSONValue[]): number => args.length;