export default function getStudentIdsSum(students) {
  const sum = students.reduce((accumulator, x) => x.id + accumulator, 0);
  return sum;
}
