
const students = {
  "23F91A05G5": { name: "Shaik Rahamthulla", result : "all pass", grade: "A" },
"23F91A05I3": { name: "Sai Sadam", result : "all pass", grade: "A" },
  "23F91A05F1": { name: "Thomas spark", result : "all pass", grade: "A" },
"23F91A05H8": { name: "raavan ka big fan", result : "all pass", grade: "A" },

"23F91A05H2": { name: "Davood bhai ERRI💐", result : "all pass", grade: "A" },
"23F91A05I5": { name: "Siva Reddy", result : "all pass", grade: "A" },
"23F91A05J3": { name: "Shesi", result : "all pass", grade: "A" },
"23F91A05J5": { name: "THARUN", result : "all pass", grade: "A" },


"23F91A05F6": { name: "ABDUL", result : "all pass", grade: "A" },
"23F91A05F8": { name: "SANDEEP LOVES D❤️", result : "all pass", grade: "A" },



  "23F91A05F9": { name: "NAVEEN lover boy", result : "all pass", grade: "A" },
"23F91A05H3": { name: "blade babji ", result : "all pass", grade: "A" },


};

function getResult() {
  const roll = document.getElementById("rollNumber").value;
  const display = document.getElementById("resultDisplay");

  if (students[roll]) {
    const student = students[roll];
    display.innerHTML = `
      Name: ${student.name} <br>
      result: ${student.result} <br>
      Grade: ${student.grade}
    `;
  } else {
    display.innerHTML = "Roll number not found!";
  }
}
