export default function getStudentsByLocation(stds, city) {
  const studentsInCity = stds.filter((x) => x.location === city);
  return studentsInCity;
}
