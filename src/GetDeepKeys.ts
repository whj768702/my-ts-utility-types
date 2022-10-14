/**
 * GetDeepKeys
 * @desc 获取所有key的集合，包括子对象中的key
 * @example
 * type Test = {
 *   name: string;
 *   age: number;
 *   address: {
 *     first: string;
 *     second: string;
 *   }
 * }
 * type Result = "name" | "age" | "address" | "first" | "second"
 * type Result = GetDeepKeys<Test>
 */
import GetKeys from './GetKeys';

type GetDeepKeys<T> = T extends object ? keyof T | { [K in keyof T]: GetKeys<T[K]> }[keyof T] : never;

export default GetDeepKeys;