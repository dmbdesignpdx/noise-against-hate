export function createIdArray(length: number, prefix: string): string[] {
  return Array.from({ length }, (_, i) => `${prefix}-${i}`);
}
