// Define the Student interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create an initial list of students
const studentsList: Student[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'Nairobi',
  },
  {
    firstName: 'Alex',
    lastName: 'Sanchez',
    age: 29,
    location: 'Cairo',
  }
];

// Function to render the table
const renderTable = (studentsList: Student[]): void => {
  // Clear existing table if it exists
  let table = document.querySelector('table');
  if (table) {
    table.remove();
  }

  // Create table element
  table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  // Create header row
  const headRow = document.createElement('tr');
  headRow.style.backgroundColor = '#f2f2f2';
  headRow.innerHTML = `
    <th style="border: 1px solid black; padding: 8px;">First Name</th>
    <th style="border: 1px solid black; padding: 8px;">Location</th>
  `;
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

// Function to handle form submission and add a new student
const handleFormSubmit = (event: Event): void => {
  event.preventDefault();

  // Get form elements
  const form = document.getElementById('studentForm') as HTMLFormElement;
  const firstNameInput = form.querySelector('#firstName') as HTMLInputElement;
  const lastNameInput = form.querySelector('#lastName') as HTMLInputElement;
  const ageInput = form.querySelector('#age') as HTMLInputElement;
  const locationInput = form.querySelector('#location') as HTMLInputElement;

  // Create a new student object
  const newStudent: Student = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: Number(ageInput.value),
    location: locationInput.value,
  };

  // Add the new student to the list and re-render the table
  studentsList.push(newStudent);
  renderTable(studentsList);

  // Clear the form
  form.reset();
};

// Create and append form to the document
const createForm = (): void => {
  const form = document.createElement('form');
  form.id = 'studentForm';
  form.innerHTML = `
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" required>
    <br>
    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" required>
    <br>
    <label for="age">Age:</label>
    <input type="number" id="age" required>
    <br>
    <label for="location">Location:</label>
    <input type="text" id="location" required>
    <br>
    <button type="submit">Add Student</button>
  `;

  // Attach event listener for form submission
  form.addEventListener('submit', handleFormSubmit);

  document.body.appendChild(form);
};

// Initialize the app
createForm();
renderTable(studentsList);
