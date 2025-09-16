document.getElementById("submitBtn").addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let Class = document.getElementById("class").value;
  let rollNo = document.getElementById("roll-no").value;

  let subjects = [
    { sno: 1, name: "Computer", marks: 100, obtained: 85 },
    { sno: 2, name: "Englissh", marks: 100, obtained: 75 },
    { sno: 3, name: "Math", marks: 100, obtained: 90 }
  ];

  let totalMarks = subjects.reduce((sum, s) => sum + s.marks, 0);
  let totalObtained = subjects.reduce((sum, s) => sum + s.obtained, 0);
  let percentage = ((totalObtained / totalMarks) * 100).toFixed(2);

  let grade = "";
  if (percentage >= 80) grade = "A+";
  else if (percentage >= 70) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 50) grade = "C";
  else grade = "Fail";

  let newWindow = window.open("", "_blank");
  newWindow.document.write(`
    <html>
      <head>
        <title>Marksheet</title>
        <link rel="stylesheet" href="css/style.css">
      </head>
      <body>
        <h2>Student Marksheet</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Class:</b> ${studentClass}</p>
        <p><b>Roll No:</b> ${roll}</p>

        <table border="1" cellspacing="0" cellpadding="8">
          <tr>
            <th>S.No</th>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained</th>
          </tr>
          ${subjects.map(s => `
            <tr>
              <td>${s.sno}</td>
              <td>${s.name}</td>
              <td>${s.marks}</td>
              <td>${s.obtained}</td>
            </tr>
          `).join("")}
        </table>

        <h3>Total Obtained: ${totalObtained} / ${totalMarks}</h3>
        <h3>Percentage: ${percentage}%</h3>
        <h3>Grade: ${grade}</h3>
      </body>
    </html>
  `);
  newWindow.document.close();
});
