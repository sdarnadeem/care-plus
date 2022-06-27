import React from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

const Middle = () => {
  const params = useParams();
  console.log(params);
  return (
    <Routes>
      <Route path="/" element={<div>main page</div>} />
      <Route path="/dashboard" element={<div>dashboard</div>} />
      <Route path="/patient" element={<div>Patient</div>}></Route>
      <Route path="/clinics" element={<div>clinics</div>}></Route>
      <Route path="/doctors" element={<div>Doctors</div>}></Route>
      <Route path="/fees" element={<div>fees</div>}></Route>
      <Route path="/payments" element={<div>payments</div>}></Route>
      <Route path="/commission" element={<div>commission</div>}></Route>
      <Route path="/admin-profile" element={<div>admin-profile</div>}></Route>
    </Routes>
  );
};

export default Middle;
