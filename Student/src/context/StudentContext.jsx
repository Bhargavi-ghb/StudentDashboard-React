import { createContext, useState, useEffect } from "react";
import studentsData from "../data/db.json";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const savedStudents = localStorage.getItem("students");
      const parsed = savedStudents ? JSON.parse(savedStudents) : null;

      if (parsed && parsed.length > 0) {
        setStudents(parsed);
      } else {
        setStudents(studentsData.students);
        localStorage.setItem("students", JSON.stringify(studentsData.students));
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load students");
    } finally {
      setLoading(false);
    }
  }, []);

  // Sync localStorage whenever students change
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem("students", JSON.stringify(students));
    }
  }, [students]);

  // CRUD operations
  const addStudent = (student) => {
    const newStudent = { id: Date.now(), ...student };
    setStudents((prev) => [...prev, newStudent]);
  };

  const updateStudent = (id, updatedData) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedData } : s))
    );
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        loading,
        error,
        addStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
