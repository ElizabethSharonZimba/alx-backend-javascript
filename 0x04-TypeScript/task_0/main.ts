interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Sharon",
  lastName: "Zimba",
  age: 20,
  location: "Midrand",
};

const student2: Student = {
  firstName: "Elizabeth",
  lastName: "Smith",
  age: 22,
  location: "Pretoria",
};

const studentsList: Student[] = [student1, student2];

const body = document.querySelector('body');
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
body?.appendChild(table);

