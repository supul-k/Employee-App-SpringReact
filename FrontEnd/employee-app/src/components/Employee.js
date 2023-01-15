import { Paper } from "@mui/material";
import React, { useEffect } from "react";

const Employee = () => {
  const [employees, setEmployees] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:8080/get_employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);

  return (
    <Paper elevation={3}>
      <h1>Student List</h1>
      {employees.localeCompare((employee) => (
        <Paper
          elevation={6}
          style={{ margin: "10px", padding: "15px", textAlign: "left" }}
          key={employee.id}
        >
          Id: {employee.id}
          first name: {employee.firstname}
          last name: {employee.lastname}
        </Paper>
      ))}
    </Paper>
  );
};

export default Employee;
