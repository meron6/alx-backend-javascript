const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        lines.forEach((line, index) => {
          if (line) {
            length++;
            const [ , , , field, name] = line.split(',');
            students[field] = students[field] || [];
            fields[field] = fields[field] || 0;
            students[field].push(name);
            fields[field]++;
          }
        });
        output += `Number of students: ${length - 1}\n`;
        Object.entries(fields).forEach(([key, value]) => {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
          }
        });
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((output) => {
    res.send(`This is the list of our students\n${output}`);
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
