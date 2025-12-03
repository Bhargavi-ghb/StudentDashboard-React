import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import "./StudentDetails.css";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, deleteStudent } = useContext(StudentContext);
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) return <div className="center-container"><p className="error-box">Student Not Found</p></div>;

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(student.id);
      navigate("/students");
    }
  }

  return (
    <div className="details-container">
      <h2>Student Details</h2>
      <div className="details-card">
       
        {student.image && <img src={student.image} alt={student.name} className="details-img" />}

        
        <h3>{student.name}</h3>

        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>

        <div className="details-actions">
          <Link to={`/edit-student/${student.id}`} className="edit-btn">Edit</Link>
          <button onClick={handleDelete} className="delete-btn">Delete</button>
          <Link to="/students" className="back-btn">← Back to List</Link>
        </div>
      </div>
    </div>
  );
}
