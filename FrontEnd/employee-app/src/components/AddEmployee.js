import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

const AddEmployee = () => {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");

  const fnameChange = (e) => {
    setFname(e.target.value);
  };
  const lnameChange = (e) => {
    setLname(e.target.value);
  };
  const dobChange = (e) => {
    setDob(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

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
                onChange={fnameChange}
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
                onChange={lnameChange}
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
                onChange={dobChange}
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
                onChange={emailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Button onSubmit={} variant="contained" href="#contained-buttons">
                    Submit
                  </Button>
                }
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default AddEmployee;
