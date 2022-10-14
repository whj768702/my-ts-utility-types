/**
 * GetKeys
 * @desc 获取key的集合(只获取一级)
 * @example
 * type Test = {
 *   age: string;
 *   name: string;
 * }
 * // Result为 'age'|'name'
 * type Result = GetKeys<Test>
 */

type GetKeys<T> = T extends object ? keyof T : never;

export default GetKeys;