import React from "react";

import {
  Box,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Fade,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import c from "./SingleDoctor.module.css";

const SingleDoctor = ({ image, name, hospital }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: 113,
        borderRadius: "13.36px",
        border: "2px solid #0089FF",
        background: "#fff",
        position: "relative",
      }}
      margin={{
        lg: "10px 30px",
        md: "5xp 10px",
        sm: "5px 10px",
        xs: "5px 10px",
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        // justifyContent="center"
        width="100%"
        height="100%"
        wrap="nowrap"
      >
        <Grid item pr="10.78px" pl="9.8px">
          <img src={image} alt="doctor" className={c.image} />
        </Grid>
        <Grid item>
          <Stack direction="column">
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 500,
                color: "#5B6889",
                fontSize: "16.92px",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              paragraph={true}
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              {hospital}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <MoreVertIcon fontSize="small" className={c.more} onClick={handleClick} />
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Block</MenuItem>
      </Menu>
    </Box>
  );
};

export default SingleDoctor;
