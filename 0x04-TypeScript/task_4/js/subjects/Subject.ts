namespace Subjects {
  // Define Subject class within Subjects namespace
  export class Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    // Setter for the teacher attribute
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
