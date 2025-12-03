import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";
import "./StudentsList.css";

export default function StudentsList() {
  const { students, setStudents, loading, error } = useContext(StudentContext);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (students.length === 0) return <p>No students available. Please add some.</p>;

  return (
    <div className="students-container">
      <h2>Students List</h2>
      <div className="students-grid">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            {student.image && (
              <img src={student.image} alt={student.name} className="student-img" />
            )}
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>

            <div className="card-buttons">
              <Link to={`/edit-student/${student.id}`} className="edit-btn">
                Edit
              </Link>
              <button onClick={() => handleDelete(student.id)} className="delete-btn">
                Delete
              </button>
              <Link to={`/students/${student.id}`} className="view-btn">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
