import React, { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";

export default function AddStudent() {
  const { students, setStudents } = useContext(StudentContext);
  const navigate = useNavigate();


  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
    image: "",
  });

  const [error, setError] = useState("");


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!form.name || !form.email || !form.course) {
      setError("Name, Email, and Course are required!");
      return;
    }

    const newStudent = {
      id: Date.now(),
      ...form,
    };


    setStudents([...students, newStudent]);


    navigate("/students");
  };

  return (
    <div className="add-container">
      <h2>Add New Student</h2>

      {error && <p className="error-box">{error}</p>}

      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course (Java, Python, MERN...)"
          value={form.course}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Add Student
        </button>
      </form>
    </div>
  );
}
