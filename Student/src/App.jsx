import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentsList from "./pages/StudentsList";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import Header from "./components/Header";
import EditStudent from "./pages/EditStudent";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />


      </Routes>
    </div>
  );
}
