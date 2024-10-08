export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const cleanString = [...set]
    .filter((x) => x.startsWith(startString))
    .map((x) => x.slice(startString.length))
    .join('-');
  return cleanString;
}
