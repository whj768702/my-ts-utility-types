/**
 * GetTypes
 * @desc 获取类型的集合
 * @example
 * type Test = {
 *   age: number;
 *   name: string;
 * }
 * // Result为 string| number
 * type Result = GetType<Test>
 */
import GetKeys from './GetKeys';

// type GetTypes<T> = T[keyof T];
type GetTypes<T> = T[GetKeys<T>];

export default GetTypes;