export default function createIteratorObject(report) {
  // Generator function to iterate over all employees
  function* employeeGenerator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  // Return an iterator from the generator function
  return employeeGenerator();
}
