// script.js

document.getElementById('resultForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);

    // Check if all marks are valid numbers
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        displayResult("Please enter valid marks for all subjects.", true);
        return;
    }

    // Calculate total and percentage
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (totalMarks / 500) * 100;

    // Determine grade
    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the result
    const resultText = `
        <p>Student Name: ${name}</p>
        <p>Roll Number: ${rollNo}</p>
        <p>Total Marks: ${totalMarks} / 500</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
    `;

    displayResult(resultText, false);
});

// Function to display result or error message
function displayResult(message, isError) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p class="${isError ? 'error' : ''}">${message}</p>`;
}
