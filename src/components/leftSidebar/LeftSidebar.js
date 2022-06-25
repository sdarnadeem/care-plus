import React from "react";

import { Paper } from "@mui/material";

import SidebarItem from "../sidebarItem/SidebarItem";
import data from "./data";

const LeftSidebar = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Paper elevation={1} sx={{ minHeight: "100vh !important" }}>
      {data.map((item, index) => (
        <SidebarItem
          expanded={expanded === item.slug}
          handleChange={handleChange(item.slug)}
          text={item.text}
          key={index + 4645}
          Icon={item.icon}
        />
      ))}
    </Paper>
  );
};

export default LeftSidebar;
