namespace Subjects {
  // Define Teacher interface within Subjects namespace
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number; // Adding optional attribute for C++
    experienceTeachingReact?: number; // Adding optional attribute for React
    experienceTeachingJava?: number; // Adding optional attribute for Java
  }
}
