export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter(student => student.location === city);

  const gradedStudents = filteredStudents.map(student => {
    const gradeUpdate = newGrades.find(grade => grade.studentId === student.id);
    student.grade = gradeUpdate ? gradeUpdate.grade : 'N/A';
    return student;
  });

  return gradedStudents;
}
