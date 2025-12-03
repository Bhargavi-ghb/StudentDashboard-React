import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { StudentProvider } from "./context/StudentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StudentProvider>
      <App />
    </StudentProvider>
  </BrowserRouter>
);
