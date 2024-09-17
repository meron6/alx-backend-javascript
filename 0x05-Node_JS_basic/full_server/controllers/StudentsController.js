/**
 * Student Controller Class
 */
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const filepath = process.argv.length > 2 ? process.argv[2] : '';
      const records = await readDatabase(filepath);
      const fields = Object.keys(records).sort();
      response.statusCode = 200;
      response.write('This is the list of our students:\n');
      fields.forEach((field, index) => {
        response.write(`Number of students in ${field}: ${records[field].length}. List: ${records[field].join(', ')}`);
        if (index < fields.length - 1) response.write('\n');
      });
    } catch (err) {
      response.statusCode = 500;
      response.write(err.message);
    } finally {
      response.end();
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major.toUpperCase())) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
      return;
    }
    const filepath = process.argv.length > 2 ? process.argv[2] : '';
    try {
      const records = await readDatabase(filepath);
      response.statusCode = 200;
      response.write(`List: ${records[major.toUpperCase()].join(', ')}`);
    } catch (err) {
      response.statusCode = 500;
      response.write(err.message);
    } finally {
      response.end();
    }
  }
}

export default StudentsController;
