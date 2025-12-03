import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import './EditStudent.css'; 

export default function EditStudent() {
  const { id } = useParams();
  const { students, setStudents } = useContext(StudentContext);
  const navigate = useNavigate();

  const studentToEdit = students.find((s) => String(s.id) === id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (studentToEdit) {
      setForm({
        name: studentToEdit.name || "",
        email: studentToEdit.email || "",
        age: studentToEdit.age || "",
        course: studentToEdit.course || "",
        image: studentToEdit.image || "",
      });
    }
  }, [studentToEdit]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = {};
    if (!form.name) errs.name = "Name required";
    if (!form.email) errs.email = "Email required";
    if (!form.age) errs.age = "Age required";
    if (!form.course) errs.course = "Course required";
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      const updatedStudents = students.map((s) =>
        String(s.id) === id ? { ...s, ...form } : s
      );
      setStudents(updatedStudents);
      navigate(`/students/${id}`);
    }
  }

  if (!studentToEdit) return <p>Student not found</p>;

  return (
    <div className="add-container">
      <h2>Edit Student</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <div className="error-box">{errors.name}</div>}
        </div>

        <div>
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />
          {errors.email && <div className="error-box">{errors.email}</div>}
        </div>

        <div>
          <label>Age</label>
          <input name="age" type="number" value={form.age} onChange={handleChange} />
          {errors.age && <div className="error-box">{errors.age}</div>}
        </div>

        <div>
          <label>Course</label>
          <input name="course" value={form.course} onChange={handleChange} />
          {errors.course && <div className="error-box">{errors.course}</div>}
        </div>

        <div>
          <label>Image URL</label>
          <input name="image" value={form.image} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Update</button>
        <Link to={`/students/${id}`} className="cancel-btn">Cancel</Link>
      </form>
    </div>
  );
}
