import React from 'react';

function App() {
  const student = {
    name: "Dikshita",
    course: "Web Programming",
    rollNo: 101,
    college: "IET Pune"
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Student Details</h1>
      <ul>
        <li><strong>Name:</strong> {student.name}</li>
        <li><strong>Course:</strong> {student.course}</li>
        <li><strong>Roll No:</strong> {student.rollNo}</li>
        <li><strong>College:</strong> {student.college}</li>
      </ul>
    </div>
  );
}
export default App;
