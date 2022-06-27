import React from "react";

import { Grid } from "@mui/material";

import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import Middle from "../../components/middle/Middle";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);
  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <Grid container>
      <Grid
        item
        lg={showSidebar ? 2 : 0.5}
        display={{xs: "none", sm: "none", lg: "inline-block", md: "inline-block" }}
      >
        <LeftSidebar handleSidebar={handleSidebar} />
      </Grid>
      <Grid item lg={showSidebar ? 10 : 11.5}>
        <Middle />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
