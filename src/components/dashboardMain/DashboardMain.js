import React from "react";
import AppointmentOverview from "./AppointmentOverview";
import PatientOverView from "./PatientOverView";
import PieData from "./PieData";
import "../dashboardMain/DashboardMain.css";
import { FaBeer } from "react-icons/fa";

const DashboardMain = () => {
  let img = [
    {
      img: "https://previews.123rf.com/images/bestvectorstock/bestvectorstock1808/bestvectorstock180813927/107223766-doctor-vector-icon-isolated-on-transparent-background-doctor-logo-concept.jpg",
      title: "Total Doctors",
      amt: "3,243",
      spn: "12.5%",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Pke_otputm7YhK-7y8ACs3iCyppJNbDWXg&usqp=CAU",
      title: "Total Doctors",
      amt: "3,243",
      spn: "12.5%",
    },
    {
      img: "https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png",
      title: "Total Doctors",
      amt: "3,243",
      spn: "12.5%",
    },
    {
      img: "https://icon2.cleanpng.com/20180403/hce/kisspng-revenue-computer-icons-business-profit-sales-income-5ac3f349f3aaa4.1202206815227912419981.jpg",
      title: "Total Doctors",
      amt: "3,243",
      spn: "12.5%",
    },
  ];
  return (
    <div className="main-contentt">
      <div
        className="col-md-10 bg-lg shadow mt-3 m-2 "
        style={{ width: "95%" }}
      >
        <div className="row ">
          {img.map((data, index) => {
            return (
              <div key={index + 45645465} className="col-xl-3 col-lg-6">
                <div className="card l-bg-cherry">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="mb-4 d-flex justify-content-between">
                      <h5 className="card-title mb-0">{data.title}</h5>
                      <i>
                        <img src={data.img} className="imgdas" />
                      </i>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">
                          {data.amt}
                        </h2>
                      </div>
                      <div className="col-4 text-right">
                        <span>{data.spn}</span>
                      </div>
                    </div>
                    <div
                      className="progress mt-1 "
                      data-height="8"
                      style={{ height: "8px" }}
                    >
                      <div
                        className="progress-bar l-bg-cyan"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="main-chart">
        <div className="mt-5 m-2 col-6 col-md-4" style={{ width: "50%" }}>
          <div>
            <AppointmentOverview />
          </div>
          <div>
            <PatientOverView />
          </div>
        </div>
        <div className="m-2 bg-lg shadow ps-5" style={{ maxWidth: "44%" }}>
          <div className="m-2 pie">
            <PieData />
          </div>
          {/* css */}
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <p>Doctor's Added</p>
            <div
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "red",
                marginTop: "2px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <p>Clinics Added</p>
            <div
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "red",
                marginTop: "2px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <p>Confirm Booking</p>
            <div
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "red",
                marginTop: "2px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <p>Total Booking</p>
            <div
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "red",
                marginTop: "2px",
              }}
            ></div>
          </div>
          {/* css over */}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
