const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  let totalStudents = 0;

  try {
    const data = fs.readFileSync(fileName, 'utf-8').trim();
    const lines = data.split('\n');

    // If the file has a header, skip the first line
    if (lines.length > 0 && lines[0].includes('name,age,field')) {
      lines.shift(); // Remove the header
    }

    lines.forEach((line) => {
      if (line) {
        totalStudents++;
        const [name, , , field] = line.split(',');

        // Ensure the field exists in the dictionary
        if (!students[field]) {
          students[field] = [];
        }

        students[field].push(name);
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    Object.entries(students).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
