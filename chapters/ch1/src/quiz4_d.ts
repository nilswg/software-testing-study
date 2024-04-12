/**
 * ## union
 *
 * 這是經過改良後的 union 方法。
 */
export function union(a: number[], b: number[]): number[] {
  return Array.from(new Set([...a, ...b]));
}