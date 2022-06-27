import React from "react";

import {
  Grid,
  Paper,
  TextField,
  InputAdornment,
  SwipeableDrawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import c from "./Header.module.css";
import HeaderProfile from "../../components/headerProfile/HeaderProfile";
import Drawer from "../../components/drawer/Drawer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    console.log(openDrawer);
    setOpenDrawer((prev) => !prev);
  };

  return (
    <header>
      <Paper elevation={1} sx={{ padding: "4px" }}>
        <Grid container alignItems="center">
          <Grid
            item
            lg={2}
            md={3}
            alignItems="center"
            display={{
              xs: "none",
              sm: "none",
              lg: "inline-block",
              md: "inline-block",
            }}
          >
            <img
              className={c.image}
              src="./images/carePlusLogo.svg"
              alt="logo"
            />
          </Grid>
          <Grid
            item
            xs={1}
            sm={2}
            sx={{ paddingLeft: "10px" }}
            display={{
              xs: "inline-block",
              sm: "inline-block",
              lg: "none",
              md: "none",
            }}
          >
            <MenuIcon
              fontSize="large"
              sx={{ cursor: "pointer" }}
              onClick={toggleDrawer}
            />
          </Grid>
          <Grid
            item
            lg={7}
            md={4}
            display={{
              xs: "none",
              sm: "none",
              lg: "inline-block",
              md: "inline-block",
            }}
          >
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
          <Grid item lg={3} md={5} sm={10} xs={11}>
            <HeaderProfile />
          </Grid>
        </Grid>
      </Paper>
      <SwipeableDrawer
        anchor={"left"}
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Drawer />
      </SwipeableDrawer>
    </header>
  );
};

export default Header;
