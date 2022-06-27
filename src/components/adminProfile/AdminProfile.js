import React from "react";

import { Grid, Button, Typography, Divider } from "@mui/material";
import PasswordField from "./passwordField/PasswordField";
// import axios from "axios";
const AdminProfile = () => {
  const [error, setError] = React.useState(null);
  const oldPasswordRef = React.useRef();
  const newPasswordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  const submitHandler = async () => {
    try {
      const oldPassword = oldPasswordRef.current.value;
      const newPassword = newPasswordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;

      if (!oldPassword && oldPassword === "") {
        return setError("Old Password Can't be empty");
      } else if (!newPassword && newPassword === "") {
        return setError("New Password Can't be empty");
      } else if (!confirmPassword && confirmPassword === "") {
        return setError("Confirm Password Can't be empty");
      } else if (newPassword !== confirmPassword) {
        return setError("New Password and Confirm Password do not match");
      }

      setError(null);

      // const data = { oldPassword, newPassword, confirmPassword };
      // const res = await axios.post("/api/v1/admin/change/admin/password", {
      //   currentPassword: oldPassword,
      //   password: newPassword,
      //   passwordConfirm: confirmPassword,
      //   // add snackbar with res.data.message
      // });

      // console.log(res);
    } catch (error) {
      console.log(error.response);
      return setError(error.response.data.message);
    }
  };
  return (
    <>
      <Grid container p={2}>
        <Typography variant="h4">Admin Profile</Typography>
      </Grid>
      <Divider />
      <Grid container direction="column" pl={2}>
        <Grid item>
          <PasswordField label="Old Password" fRef={oldPasswordRef} />
        </Grid>
        <Grid item>
          <PasswordField label="New Password" fRef={newPasswordRef} />
        </Grid>
        <Grid item>
          <PasswordField
            label="Confirm New Password"
            fRef={confirmPasswordRef}
          />
        </Grid>
        {error && (
          <Grid item>
            <Typography variant="caption" component="p" sx={{ color: "red" }}>
              *{error}
            </Typography>
          </Grid>
        )}
        <Grid item>
          <Button variant="contained" onClick={submitHandler}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminProfile;
