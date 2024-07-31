// Define the Student interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Alex',
  lastName: 'Sanchez',
  age: 29,
  location: 'Cairo',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
export const renderTable = (studentsList: Student[]): void => {
  // Create table element
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  // Create header row
  const headRow = document.createElement('tr');
  headRow.style.backgroundColor = '#f2f2f2';
  headRow.innerHTML = '<th style="border: 1px solid black; padding: 8px;">First Name</th><th style="border: 1px solid black; padding: 8px;">Location</th>';
  table.appendChild(headRow);

  // Add rows for each student
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    row.style.border = '1px solid black';

    row.innerHTML = `
      <td style="border: 1px solid black; padding: 8px;">${student.firstName}</td>
      <td style="border: 1px solid black; padding: 8px;">${student.location}</td>
    `;

    table.appendChild(row);
  });

  // Append the table to the body
  document.body.appendChild(table);
};

// Function to add a new student to the list and re-render the table
export const addStudent = (student: Student): void => {
  studentsList.push(student);
  document.body.innerHTML = ''; // Clear existing content
  renderTable(studentsList);
};

// Render the initial table
renderTable(studentsList);

// Example of adding a new student
const newStudent: Student = {
  firstName: 'Emma',
  lastName: 'Watson',
  age: 24,
  location: 'London',
};
addStudent(newStudent);
