// import React from "react";

// import { Grid, Button, Typography, Divider } from "@mui/material";
// import PasswordField from "./passwordField/PasswordField";


// const AdminProfile = () => {
//   const [error, setError] = React.useState(null);
//   const oldPasswordRef = React.useRef();
//   const newPasswordRef = React.useRef();
//   const confirmPasswordRef = React.useRef();

//   const submitHandler = async () => {
//     try {
//       const oldPassword = oldPasswordRef.current.value;
//       const newPassword = newPasswordRef.current.value;
//       const confirmPassword = confirmPasswordRef.current.value;

//       if (!oldPassword && oldPassword === "") {
//         return setError("Old Password Can't be empty");
//       } else if (!newPassword && newPassword === "") {
//         return setError("New Password Can't be empty");
//       } else if (!confirmPassword && confirmPassword === "") {
//         return setError("Confirm Password Can't be empty");
//       } else if (newPassword !== confirmPassword) {
//         return setError("New Password and Confirm Password do not match");
//       }

//       setError(null);

//     } catch (error) {
//       console.log(error.response);
//       return setError(error.response.data.message);
//     }
//   };
//   return (
//     <>
//       <Grid container p={2}>
//         <Typography variant="h4">Admin Profile</Typography>
//       </Grid>
//       <Divider />
//       <Grid container direction="column" pl={2}>
//         <Grid item>
//           <PasswordField label="Old Password" fRef={oldPasswordRef} />
//         </Grid>
//         <Grid item>
//           <PasswordField label="New Password" fRef={newPasswordRef} />
//         </Grid>
//         <Grid item>
//           <PasswordField
//             label="Confirm New Password"
//             fRef={confirmPasswordRef}
//           />
//         </Grid>
//         {error && (
//           <Grid item>
//             <Typography variant="caption" component="p" sx={{ color: "red" }}>
//               *{error}
//             </Typography>
//           </Grid>
//         )}
//         <Grid item>
//           <Button variant="contained" onClick={submitHandler}>
//             Submit
//           </Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default AdminProfile;


import React from 'react'
import "../adminProfile/AdminProfile.css"
import { Box, Typography } from "@mui/material";
const AdminProfile = () => {
  return (
    <div>
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          width: 140,
          height: 31,
          background:
            "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
          borderRadius: "64px",
        }}
        margin={{
          lg: "10px 30px",
          md: "5xp 10px",
          sm: "5px 10px",
          xs: "5px 10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "16px",
            color: "#fff",
          }}
        >
          Admin Profile
        </Typography>
      </Box>
      <section class="vh-100 gradient-custom w-100">
        <div class="container py-0 h-100">
          <div class="row ">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="main-form" style={{ borderRadius: "15px", width: "150%" }}>
                <div class="card-body p-4 p-md-5">

                  <div className='main-container '>
                    <form>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="text" id="firstName" class="form-control form-control-lg" placeholder='Enter First Name' />
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">

                          <div class="form-outline">
                            <input type="text" id="lastName" class="form-control form-control-lg" placeholder='Enter Last Name' />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline">
                            <input type="text" id="emailAddress" class="form-control form-control-lg" placeholder='E-mail' />
                          </div>

                        </div>
                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline">
                            <input type="tel" id="phoneNumber" class="form-control form-control-lg" placeholder='Date Of Birth' />
                          </div>

                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline">
                            <input type="phone" id="phoneNumber" class="form-control form-control-lg" placeholder='Mobile Number' />
                          </div>

                        </div>
                        <div class="col-md-6 mb-4 pb-2">

                          <div class="form-outline">
                            <input type="file" id="phoneNumber" class="form-control form-control-lg" placeholder='Profile Picture' />
                          </div>
                        </div>
                      </div>
                      {/* <div class="mt-4 pt-2">
                        <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                      </div> */}
                    </form>
                    <div style={{ marginLeft: "150px" }} className="admin-img">
                      <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='logo' className='img img-fluid' width="200px" height="auto" />
                      <p className='fs-3'>Ashish Verma</p>
                    </div>
                  </div>

                  {/* gender */}
                  <div class="row">

                    <div class="col-md-6 mb-4">

                      <h6 class="mb-2 pb-1">Gender: </h6>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                          value="option1" checked />
                        <label class="form-check-label" for="femaleGender">Female</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                          value="option2" />
                        <label class="form-check-label" for="maleGender">Male</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                          value="option3" />
                        <label class="form-check-label" for="otherGender">Other</label>
                      </div>

                    </div>
                  </div>
                  {/* gender */}
                  <div class="mt-4 pt-2">
                    <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}

export default AdminProfile