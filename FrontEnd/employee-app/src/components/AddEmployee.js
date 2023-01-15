import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";
import { Button, Paper } from "@mui/material";

const AddEmployee = () => {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");

  const [employees, setEmployees] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const employee = {fname,lname,email,dob};
    console.log(employee);
    fetch("http://localhost:8080/add_employee", {
      method : "POST",
      headers : {"content-type" : "application/json"},
      body : JSON.stringify(employee)
    }).then (()=> {
      console.log("New Employee Added")
    })
  } 

  React.useEffect(() => {
    fetch("http://localhost:8080/get_employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      })
  }, [])

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom>
          Add Employee
        </Typography>
        <form method="POST">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="firstName"
                label="First Name"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="lastName"
                label="Last Name"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="dob"
                label="Date of Birth"
                fullWidth
                variant="standard"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="email"
                label="e-mail"
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Button variant="contained"
                    onClick={handleClick}
                  >
                    Submit
                  </Button>
                }
              />
            </Grid>
          </Grid>
        </form>


        {/* <Paper elevation={3}>
      <h1>Student List</h1>
      {employees.map(employee => (
        <Paper
          elevation={6}
          style={{ margin: "10px", padding: "15px", textAlign: "left" }}
          key={employee.id}
        >
          Id: {employee.id}
          first name: {employee.first_name}
          last name: {employee.last_name}
        </Paper>
      ))}
    </Paper> */}
      </Container>
    </React.Fragment>
  );
};

export default AddEmployee;
