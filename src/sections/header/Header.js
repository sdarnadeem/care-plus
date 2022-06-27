import React from "react";

import { Grid, Paper, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import c from "./Header.module.css";
import HeaderProfile from "../../components/headerProfile/HeaderProfile";

const Header = () => {
  return (
    <header>
      <Paper elevation={1}>
        <Grid container alignItems="center">
          <Grid item lg={2} md={3} sm={4} alignItems="center">
            <img
              className={c.image}
              src="./images/carePlusLogo.svg"
              alt="logo"
            />
          </Grid>
          <Grid item lg={7} md={4}>
            <TextField
              id="input-with-icon-textfield"
              placeholder="Type to search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item lg={3} md={5} sm={8}>
            <HeaderProfile />
          </Grid>
        </Grid>
      </Paper>
    </header>
  );
};

export default Header;
