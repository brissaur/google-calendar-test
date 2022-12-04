export default function isBetweenNumbers(number: number, a: number | null, b: number | null) {
  if (a === null || b === null) {
    return false;
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return number >= min && number <= max;
}
