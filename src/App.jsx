// src/App.js
import React from "react";
import { Container, Grid } from "@mui/material";
import CourseForm from "./Components/CourseForm";
import StudentList from "./Components/StudentList";
import CourseList from "./Components/CourseList";
import StudentForm from "./Components/StudentForm";

const App = () => {
  return (
    <>
      <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'100px'}}>
        <CourseForm />
        <StudentForm />
      </div>
    </>
  );
};

export default App;
