/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging to add experienceTeachingReact to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Define React class extending Subject within Subjects namespace
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingReact > 0 
        ? `Available Teacher: ${this.teacher.firstName}` 
        : 'No available teacher';
    }
  }
}
