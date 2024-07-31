import { Cpp, Java, React } from './subjects/Cpp';
import { Teacher } from './subjects/Teacher';

// Create and export a constant `cpp` for Cpp Subject
export const cpp = new Cpp(new Teacher('Guillaume', 'Salva'));

// Create and export a constant `java` for Java Subject
export const java = new Java(new Teacher('Guillaume', 'Salva'));

// Create and export a constant `react` for React Subject
export const react = new React(new Teacher('Guillaume', 'Salva'));

// Create and export a Teacher object `cTeacher` with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
