export default function setFromArray(data) {
  const newSet = new Set();
  for (const iterable of data) {
    newSet.add(iterable);
  }
  return newSet;
}
