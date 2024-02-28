// src/components/StudentForm.js
import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material";
import StudentList from "./StudentList";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: +"",
  });
  const [fetch, setfetch] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const URL = "http://localhost:3001";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL + "/api/v1/std", formData);
      setfetch(true);
    } catch (error) {
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography sx={{ fontSize: "30px" }}>Add Student</Typography>
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        fullWidth
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        name="age"
        label="Age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add Student
      </Button>
      <StudentList fetch={fetch} setfetch={setfetch} />
    </form>
  );
};

export default StudentForm;
