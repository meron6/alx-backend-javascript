}
rt default function iterateThroughObject(reportWithIterator) {
  // Collect all employee names from the iterator
  const employees = [];
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join all employee names with " | " separator
  return employees.join(' | ');
}
