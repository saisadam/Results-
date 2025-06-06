
const students = {
  "1001": { name: "Ravi Kumar", marks: 85, grade: "A" },
  "1002": { name: "Anjali Sharma", marks: 74, grade: "B" },
  "1003": { name: "Mohit Reddy", marks: 56, grade: "C" },
};

function getResult() {
  const roll = document.getElementById("rollNumber").value;
  const display = document.getElementById("resultDisplay");

  if (students[roll]) {
    const student = students[roll];
    display.innerHTML = `
      Name: ${student.name} <br>
      Marks: ${student.marks} <br>
      Grade: ${student.grade}
    `;
  } else {
    display.innerHTML = "Roll number not found!";
  }
}
