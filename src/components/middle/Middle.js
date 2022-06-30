import React from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import DashboardMain from "../dashboardMain/DashboardMain";
import Patient from "../patient/Patient";
import Clinic from "../clinics/Clinics";
import Doctor from "../doctors/Doctors";
import NewDoctor from "../doctors/newDoctor/NewDoctor";
import DoctorSchedule from "../doctorSchedule/DoctorSchedule";
import Department from "../department/Department";
import NewDepartment from "../department/newDepartment/NewDepartment";
// import Fees from "../appointment/Fees";
import Appointment from "../appointment/Appointment";
import Fees from "../fees/Fees";
import Payments from "../payments/Payments";
import Commission from "../commission/Commission";
import AdminProfile from "../adminProfile/AdminProfile";
import FeeClinic from "../appointment/AppointmentList";
import AddPayment from "../payments/AddPayment";
import AppointmentList from "../appointment/AppointmentList";
import AddAppointment from "../appointment/AddAppointment";
const Middle = () => {
  const params = useParams();
  console.log(params);
  return (
    <Routes>
      <Route path="/" element={<DashboardMain />} />
      <Route path="/dashboard" element={<DashboardMain />} />
      <Route path="/patient" element={<Patient />}></Route>
      <Route path="/clinics" element={<Clinic />}></Route>
      <Route path="/clinics/all-clinics" element={<Clinic />}></Route>
      <Route path="/clinics/diagnostic-center" element={<Clinic />}></Route>
      <Route path="/doctors" element={<Doctor />}></Route>
      <Route path="/doctors/doctor-list" element={<Doctor />}></Route>
      <Route path="/doctors/add-doctor" element={<NewDoctor />}></Route>
      <Route path="/doctor-schedule" element={<DoctorSchedule />}></Route>
      <Route
        path="/doctors-schedule/schedule-list"
        element={<DoctorSchedule />}
      ></Route>
      <Route
        path="/doctors-schedule/add-schedule"
        element={<DoctorSchedule />}
      ></Route>
      <Route path="/department" element={<Department />}></Route>
      <Route
        path="/department/department-list"
        element={<Department />}
      ></Route>
      <Route
        path="/department/add-department"
        element={<NewDepartment />}
      ></Route>
      {/* <Route path="/fees" element={<Fees />}></Route>
      <Route path="/fees/clinic" element={<FeeClinic />}></Route> */}
      <Route
        path="/appointment/appointmentList"
        element={<AppointmentList />}
      ></Route>
      <Route
        path="/appointment/addAppointment"
        element={<AddAppointment />}
      ></Route>
      <Route path="/appointment" element={<Appointment />}></Route>
      <Route path="/fees" element={<Fees />}></Route>
      <Route path="/fees/clinic" element={<FeeClinic />}></Route>
      <Route path="/payments" element={<Payments />}></Route>
      <Route path="/payments/add" element={<AddPayment />}></Route>
      <Route path="/commission" element={<Commission />}></Route>
      <Route path="/admin-profile" element={<AdminProfile />}></Route>
    </Routes>
  );
};

export default Middle;
