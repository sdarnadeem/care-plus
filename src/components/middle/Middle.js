import React from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import Clinic from "../clinics/Clinics";
import Doctor from "../doctors/Doctors";
import Fees from "../fees/Fees";
import Payments from "../payments/Payments";
import DashboardMain from "../dashboardMain/DashboardMain";
import Commission from "../commission/Commission";

const Middle = () => {
  const params = useParams();
  console.log(params);
  return (
    <Routes>
      <Route path="/" element={<DashboardMain />} />
      <Route path="/dashboard" element={<DashboardMain />} />
      <Route path="/patient" element={<div>Patient</div>}></Route>
      <Route path="/clinics" element={<Clinic />}></Route>
      <Route path="/doctors" element={<Doctor />}></Route>
      <Route path="/fees" element={<Fees />}></Route>
      <Route path="/payments" element={<Payments />}></Route>
      <Route path="/commission" element={<Commission />}></Route>
      <Route path="/admin-profile" element={<div>admin-profile</div>}></Route>
    </Routes>
  );
};

export default Middle;
