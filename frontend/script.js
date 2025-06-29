const form = document.getElementById('employeeForm');
const list = document.getElementById('employeeList');

const fetchEmployees = async () => {
  const res = await fetch('http://localhost:5000/api/employees');
  const data = await res.json();
  list.innerHTML = data.map(emp => `
    <div>
      <h3>${emp.name}</h3>
      <p>${emp.email} - ${emp.position} (${emp.department})</p>
      <button onclick="deleteEmp('${emp._id}')">Delete</button>
    </div>`).join('');
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newEmp = {
    name: form.name.value,
    email: form.email.value,
    position: form.position.value,
    department: form.department.value
  };
  await fetch('http://localhost:5000/api/employees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newEmp)
  });
  form.reset();
  fetchEmployees();
});

const deleteEmp = async (id) => {
  await fetch(`http://localhost:5000/api/employees/${id}`, { method: 'DELETE' });
  fetchEmployees();
};

fetchEmployees();