/**
 * Retrieves an array of student IDs.
 * @param {Array} students - The list of students.
 * @returns {Number[]} An array of student IDs.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
