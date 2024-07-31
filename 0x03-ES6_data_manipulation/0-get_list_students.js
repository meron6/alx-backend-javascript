// This function returns a list of student objects
export default function getListStudents() {
  // Define student objects
  const o1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };

  const o2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };

  const o3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  // Return an array of student objects
  return [o1, o2, o3];
}
