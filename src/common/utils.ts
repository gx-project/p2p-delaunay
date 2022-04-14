export function reversePositionsKeyValue<K, V, T extends Map<K, V>>(
  input: T
): Map<V, K> {
  const result = new Map<V, K>();

  for (const [id, coord] of input) {
    result.set(coord, id);
  }

  return result;
}
