const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        lines.forEach((line, index) => {
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
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
