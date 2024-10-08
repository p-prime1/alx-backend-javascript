export default function hasValuesFromArray(set, array) {
  const newSet = new Set(array);
  for (const value of newSet) {
    if (!(set.has(value))) {
      return false;
    }
  }
  return true;
}
