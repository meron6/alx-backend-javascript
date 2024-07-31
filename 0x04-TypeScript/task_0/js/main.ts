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

  // Create header row
  const headRow = document.createElement('tr');
  headRow.innerHTML = '<th>First Name</th><th>Location</th>';
  table.appendChild(headRow);

  // Add rows for each student
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
  });

  // Append the table to the body
  document.body.appendChild(table);
};

// Render the table
renderTable(studentsList);
