export default function getListStdents(ids) {
  if (!(Array.isArray(ids))) {
    return [];
  }
  const id = ids.map((x) => x.id);
  return (id);
}
