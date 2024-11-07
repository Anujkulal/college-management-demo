async function fetchData(className) {
    const response = await fetch(`/api/students?class=${className}`);
    const data = await response.json();
    displayData(data);
  }
  
  async function fetchToppers() {
    const response = await fetch('/api/students/toppers');
    const data = await response.json();
    displayData(data);
  }
  
  async function fetchLowAttendance() {
    const response = await fetch('/api/students/low-attendance');
    const data = await response.json();
  }
  
  function displayData(data) {
    const results = document.getElementById('results');
    results.innerHTML = data.map(student => `
      <div>
        <p>Name: ${student.name}</p>
        <p>Marks: ${student.marks}</p>
        <p>Attendance: ${student.attendance}%</p>
      </div>
    `).join('');
  }
  

  