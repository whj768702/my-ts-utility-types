/**
 * ExtractType
 * @desc 提取相同key的类型.
 * @example
 * type Test1 = {
 *   age: string;
 *   name: string;
 * }
 * type Test2 = {
 *   age: number;
 *   name: number;
 *   width: number;
 * }
 * // Result为string|number
 * type Result = ExtractType<Test1, Test2>
 */

type ExtractType<T, U> = T[keyof T & keyof U] | U[keyof T & keyof U]

export default ExtractType;