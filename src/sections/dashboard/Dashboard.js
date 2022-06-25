import React from "react";

import { Grid } from "@mui/material";

import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import Middle from "../../components/middle/Middle";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item lg={2}>
        <LeftSidebar />
      </Grid>
      <Grid item lg={10}>
        <Middle />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
