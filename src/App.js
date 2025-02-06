import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Student ID: 101500298</h1>
      <h1>Student Name: Eduardo Rosa Guimaraes</h1>
      <h1>Computer System Tech T147</h1>
      <h5>Powered By: moxDroid Labs Inc. || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      Developerd By: Pritesh Patel
      <StudentList students={students} />
    </div>
  );
};

export default App;
