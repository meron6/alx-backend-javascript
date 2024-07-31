/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging to add experienceTeachingJava to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Define Java class extending Subject within Subjects namespace
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingJava > 0 
        ? `Available Teacher: ${this.teacher.firstName}` 
        : 'No available teacher';
    }
  }
