/**
 * Asynchronously reads a file and generates a report from CSV file data.
 */
import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').slice(1);
        const report = {};
        lines.forEach((line) => {
          const [id, , , category] = line.split(',');
          if (category && id) {
            report[category] = report[category] || [];
            report[category].push(id);
          }
        });
        resolve(report);
      }
    });
  });
}

export default readDatabase;
