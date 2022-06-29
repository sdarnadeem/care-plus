import React from "react";
import ChartBar from "./ChartBar";
import PieData from "./PieData";
import "../dashboardMain/DashboardMain.css"
import { FaBeer } from 'react-icons/fa';

const DashboardMain = () => {

  return (
    <div className="main-contentt">
      <div className="col-md-10 bg-lg shadow mt-3 ms-5 ">
        <div className="row ">
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-cherry">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                  <h5 className="card-title mb-0">Total Doctors</h5>
                  <i><img src="https://previews.123rf.com/images/bestvectorstock/bestvectorstock1808/bestvectorstock180813927/107223766-doctor-vector-icon-isolated-on-transparent-background-doctor-logo-concept.jpg" className="imgdas" /></i>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">3,243</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      12.5% <i class="fa fa-home" aria-hidden="true"></i>
                    </span>
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
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-blue-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-users"></i>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                  <h5 className="card-title mb-0">Patient</h5>
                  <i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Pke_otputm7YhK-7y8ACs3iCyppJNbDWXg&usqp=CAU" className="imgdas" /></i>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">15.07k</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      9.23% <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-green"
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
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-green-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-ticket-alt"></i>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                  <h5 className="card-title mb-0">Clinics</h5>
                  <i><img src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png" className="imgdas" /></i>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">578</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      10% <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-orange"
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
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-orange-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                  <h5 className="card-title mb-0">Total Revenue</h5>
                  <i><img src="https://icon2.cleanpng.com/20180403/hce/kisspng-revenue-computer-icons-business-profit-sales-income-5ac3f349f3aaa4.1202206815227912419981.jpg" className="imgdas" /></i>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">$11.61k</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      2.5% <i className="fa fa-arrow-up"></i>
                    </span>
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
        </div>
      </div>
      <div className="main-chart">
        <div className="mt-5 ms-5 col-6 col-md-4" style={{ width: "36%" }}>
          <div >
            <ChartBar />
          </div>
          <div>
            <ChartBar />
          </div>
        </div>
        <div className="ms-5 bg-lg shadow ps-5" style={{ width: "40%" }}>
          <div className="ms-5">
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
