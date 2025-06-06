
let studentData = {};

fetch("student_results.json")
  .then(response => response.json())
  .then(data => {
    studentData = data;
  });

function getResult() {
  const roll = document.getElementById("rollNumber").value.trim();
  const display = document.getElementById("resultDisplay");
  display.innerHTML = "";

  if (!studentData[roll]) {
    display.innerHTML = "<p>Student not found. Please check the Hall Ticket Number.</p>";
    return;
  }

  const student = studentData[roll];
  let output = `<h3>Results for ${roll}</h3><table border="1" cellpadding="6" style="width:100%;border-collapse:collapse;">
    <tr><th>Subject</th><th>Marks</th><th>Grade</th></tr>`;
  for (const subject in student) {
    const result = student[subject];
    output += `<tr><td>${subject}</td><td>${result.marks}</td><td>${result.grade}</td></tr>`;
  }
  output += "</table>";
  display.innerHTML = output;
}
