import React, { useEffect, useState } from "react";
import API from "../services/api";

function Attendence() {

  const [employees, setEmployees] = useState([]);
  const [attendence, setAttendence] = useState([]);

  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "present"
  });

  // Fetch employees
  const fetchEmployees = async () => {
    try {
      const res = await API.get("employees/");
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  // Fetch attendance records
  const fetchAttendence = async () => {
    try {
      const res = await API.get("attendence-list/");
      setAttendence(res.data);
    } catch (error) {
      console.error("Error fetching attendence", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchAttendence();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const markAttendence = async (e) => {
    e.preventDefault();

    try {
      await API.post("attendence/", form);
      fetchAttendence();

      setForm({
        employee: "",
        date: "",
        status: "present"
      });

    } catch (error) {
      console.error("Error marking attendence", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Attendence Management</h2>

      <form onSubmit={markAttendence}>

        <select
          name="employee"
          value={form.employee}
          onChange={handleChange}
        >
          <option value="">Select Employee</option>

          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}

        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>

        <button type="submit">Mark Attendence</button>

      </form>

      <h3>Attendence Records</h3>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {attendence.map(item => (
            <tr key={item.id}>
              <td>{item.employee}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Attendence;