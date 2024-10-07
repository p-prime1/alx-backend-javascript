export default function updateStudentGradeByCity(studentsLists, city, newGrades) {
  const newList = studentsLists.filter((x) => x.location === city).map((x) => {
    const studentsGrade = newGrades.find((grade) => grade.studentId === x.id);
    const newStudent = { ...x, grade: studentsGrade ? studentsGrade.grade : 'N/A' };
    return newStudent;
  });
  return newList;
}
