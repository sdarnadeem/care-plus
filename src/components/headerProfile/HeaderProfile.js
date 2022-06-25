import React from "react";

import { Stack, Typography, Badge, Divider } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import c from "./HeaderProfile.module.css";

const HeaderProfile = () => {
  return (
    <Stack direction="row" justifyContent="end" marginRight="30px">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Divider orientation="vertical" />
        <Badge badgeContent={8} color="primary">
          <CircleNotificationsIcon color="secondary" />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <MessageIcon color="secondary" />
        </Badge>
        <Divider orientation="vertical" />
      </Stack>
      <Stack direction="row">
        <img
          src="https://images.unsplash.com/photo-1656075426836-b387b49c0509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          className={c.profile}
          alt=""
        />
        <Stack direction="column">
          <Typography variant="body1">
            <strong>Nasyx Nadeem</strong>
          </Typography>
          <Typography variant="caption">Web Developer</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeaderProfile;
