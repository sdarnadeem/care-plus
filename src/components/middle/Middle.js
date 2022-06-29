import React from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import DashboardMain from "../dashboardMain/DashboardMain";
import Patient from "../patient/Patient";
import Clinic from "../clinics/Clinics";
import Doctor from "../doctors/Doctors";
import NewDoctor from "../doctors/newDoctor/NewDoctor";
import Fees from "../fees/Fees";
import Payments from "../payments/Payments";
import Commission from "../commission/Commission";
import AdminProfile from "../adminProfile/AdminProfile";
import FeeClinic from "../fees/FeeClinic";
const Middle = () => {
  const params = useParams();
  console.log(params);
  return (
    <Routes>
      <Route path="/" element={<DashboardMain />} />
      <Route path="/dashboard" element={<DashboardMain />} />
      <Route path="/patient" element={<Patient />}></Route>
      <Route path="/clinics" element={<Clinic />}></Route>
      <Route path="/doctors" element={<Doctor />}></Route>
      <Route path="/doctors/add-doctor" element={<NewDoctor />}></Route>
      <Route path="/fees" element={<Fees />}></Route>
      <Route path="/fees/clinic" element={<FeeClinic />}></Route>
      <Route path="/payments" element={<Payments />}></Route>
      <Route path="/commission" element={<Commission />}></Route>
      <Route path="/admin-profile" element={<AdminProfile />}></Route>
    </Routes>
  );
};

export default Middle;
