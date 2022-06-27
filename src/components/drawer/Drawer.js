import React from "react";

import { Paper, Divider, Stack } from "@mui/material";

import SidebarItem from "../sidebarItem/SidebarItem";

import data from "../leftSidebar/data";
import c from "./Drawer.module.css";

const Drawer = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper elevation={1} sx={{ minHeight: "100vh !important" }}>
      <Stack direction="row" justifyContent="center">
        <img className={c.image} src="./images/carePlusLogo.svg" alt="logo" />
      </Stack>
      <Divider />
      {data.map((item, index) => (
        <SidebarItem
          expanded={expanded === item.slug}
          handleChange={handleChange(item.slug)}
          text={item.text}
          key={index + 4645}
          showSidebar={true}
          Icon={item.icon}
          items={item.items}
          slug={item.slug}
        />
      ))}
    </Paper>
  );
};

export default Drawer;
