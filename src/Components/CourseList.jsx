// src/components/CourseList.js
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

const CourseList = ({ fetch, setfetch }) => {
  const [courses, setCourses] = useState([]);
  const URL = "https://learning-management-backend.vercel.app";
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(URL + "/api/v1/course");
        setCourses(response.data.course);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
    setfetch(false);
  }, [fetch]); // Empty dependency array ensures useEffect runs only once]

  const deleteCourse = async (id) => {
    try {
      const response = await axios.delete(URL + `/api/v1/course/${id}`);
      setfetch(true);
    } catch (error) {
      console.error("Error deleting courses:", error);
    }
  };
  // const updateCourses = async (id) => {

  //   try {
  //     const response = await axios.delete(URL + `/api/v1/course/${id}`);
  //     setCourses(...courses);
  //   } catch (error) {
  //     console.error("Error deleting courses:", error);
  //   }
  // };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Timing</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses?.length > 0
            ? courses.map((course) => (
                <TableRow key={course._id}>
                  <TableCell>{course.courseName}</TableCell>
                  <TableCell>{course.timing}</TableCell>
                  <TableCell>
                    <Button onClick={() => deleteCourse(course._id)}>
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

export default CourseList;
