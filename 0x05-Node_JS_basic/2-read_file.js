const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;
  try {
    const data = fs.readFileSync(fileName, 'utf-8');
    const lines = data.split('\n');
    lines.forEach((line) => {
      if (line) {
        totalStudents++;
        const [name, , , field] = line.split(',');
        students[field] = students[field] || [];
        students[field].push(name);
        fields[field] = (fields[field] || 0) + 1;
      }
    });
    console.log(`Number of students: ${totalStudents - 1}`);
    Object.entries(fields).forEach(([key, value]) => {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
