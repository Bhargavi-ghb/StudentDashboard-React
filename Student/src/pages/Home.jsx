import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import "./Home.css";

export default function Home() {
  const { students } = useContext(StudentContext);

  const totalStudents = students.length;
  const totalCourses = [...new Set(students.map(s => s.course))].length;
  const latestStudent = students[students.length - 1];

  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="home-content">
          <h1>Welcome to Student Dashboard</h1>
          <p>Manage student data efficiently</p>
          <div className="home-links">
            <Link to="/students" className="home-btn">View Students</Link>
            <Link to="/add-student" className="home-btn">Add Student</Link>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <h2>Dashboard Stats</h2>
        <div className="stats-cards">
          <div className="stat-card">
            <h3>{totalStudents}</h3>
            <p>Total Students</p>
          </div>
          <div className="stat-card">
            <h3>{totalCourses}</h3>
            <p>Courses Available</p>
          </div>
          {latestStudent && (
            <div className="stat-card">
              <h3>{latestStudent.name}</h3>
              <p>Latest Added Student</p>
            </div>
          )}
        </div>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Easy Management</h3>
            <p>Add, edit, view, and delete students effortlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>Works perfectly on all devices—desktop, tablet, or mobile.</p>
          </div>
          <div className="feature-card">
            <h3>Fast & Efficient</h3>
            <p>Built with React and Context API for smooth performance.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Students Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>"This dashboard makes managing student data a breeze!"</p>
            <h4>- Rahul Sharma</h4>
          </div>
          <div className="testimonial-card">
            <p>"Love the responsive design and easy-to-use interface."</p>
            <h4>- Ananya Gupta</h4>
          </div>
          <div className="testimonial-card">
            <p>"Fast, efficient, and very helpful for student management."</p>
            <h4>- Vikram Rao</h4>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Adding Students Today!</h2>
        <Link to="/add-student" className="cta-btn">Add Student</Link>
      </section>

      <footer className="home-footer">
        <p>&copy; 2025 Student Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}
