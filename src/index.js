import React from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing/Landing";
import CustomForm from "./components/form/CustomForm";
import IeltsForm from "./components/form/IeltsForm";
import Datatable from "./components/admin/Table";

import CreateExam from "./components/admin/CreateExam";
import TestForm from "./components/form/TestForm";
import Admin from "./components/admin/Admin";
import Navbar from "./components/navbar/Navbar";
import AdminTable from "./components/admin/Table";
import AdminExams from "./components/admin/AdminExams";
import ExamEdit from "./components/admin/ExamEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/:exam",
    element: <CustomForm />,
  },
  {
    path: "/admin",
    element: (
      <>
        <Navbar />
        <Admin />
      </>
    ),
  },
  {
    path: "/create_exam",
    element: (
      <>
        <Navbar />
        <CreateExam />
      </>
    ),
  },
  {
    path: "/admin/exams",
    element: (
      <>
        <Navbar />
        <AdminExams />
      </>
    ),
  },
  {
    path: "/admin/exams/edit",
    element: (
      <>
        <Navbar />
        <ExamEdit />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
