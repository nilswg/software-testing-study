/**
 * ## Ambiguous Union
 *
 * 根據題目，一個描述模糊不清的方法。
 */
export function ambiguous_union<T>(a: T[], b: T[]): T[] {
  // 根據唯一需求，a 與 b 其中一個會返回。
  return !a.length ? b : a;
}