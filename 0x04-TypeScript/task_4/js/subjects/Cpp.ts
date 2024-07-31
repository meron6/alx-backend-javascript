/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging to add experienceTeachingC to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Define Cpp class extending Subject within Subjects namespace
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC > 0 
        ? `Available Teacher: ${this.teacher.firstName}` 
        : 'No available teacher';
    }
  }
}
