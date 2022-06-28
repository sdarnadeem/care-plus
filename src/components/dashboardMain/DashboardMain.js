import React from "react";
import ChartBar from "./ChartBar";
import PieData from "./PieData";

const DashboardMain = () => {
  return (
    <>
      <div className="col-md-10 bg-lg shadow mt-3 ms-5 ">
        <div className="row ">
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-cherry">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">New Orders</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">3,243</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      12.5% <i className="fa fa-arrow-up"></i>
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
                <div className="mb-4">
                  <h5 className="card-title mb-0">Customers</h5>
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
                <div className="mb-4">
                  <h5 className="card-title mb-0">Ticket Resolved</h5>
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
                <div className="mb-4">
                  <h5 className="card-title mb-0">Revenue Today</h5>
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
      <div style={{ display: "flex" }}>
        <div className="mt-5 ms-5" style={{ width: "36%" }}>
          <div>
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
    </>
  );
};

export default DashboardMain;
