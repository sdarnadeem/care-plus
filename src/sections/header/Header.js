import React from "react";

import { Grid, Paper, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import c from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Paper elevation={1}>
        <Grid container>
          <Grid item lg={2}>
            <img
              className={c.image}
              src="./images/carePlusLogo.svg"
              alt="logo"
            />
          </Grid>
          <Grid item lg={7}>
            <TextField
              id="input-with-icon-textfield"
              label="TextField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>
          <Grid item lg={3}>
            Notifications
          </Grid>
        </Grid>
      </Paper>
    </header>
  );
};

export default Header;
