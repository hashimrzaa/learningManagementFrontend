// src/components/StudentList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";

const StudentList = ({ fetch, setfetch }) => {
  const [students, setStudents] = useState([]);
  const URL = "http://localhost:3001";
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(URL + "/api/v1/std");
        setStudents(response.data.student);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
    setfetch(false);
  }, [fetch]);

  const deleteStd = (id, index) => {
    try {
      const response = axios.delete(URL + `/api/v1/std/${id}`);
      setfetch(true)
    
    } catch (error) {
      console.error("Error deleting students", error);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students?.length > 0
            ? students.map((student, index) => (
                <TableRow key={student._id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>
                    <Button onClick={() => deleteStd(student._id, index)}>
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
