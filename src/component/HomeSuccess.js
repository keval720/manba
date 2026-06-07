import React from "react";
import "../component/HomeSuccess.css";
import finance1 from "../Assets/finance 1.png";
import team from "../Assets/team 1.png";
import verified from "../Assets/verified 1.png";
import medal from "../Assets/medal 1.png";

const HomeSuccess = () => {
  return (
    <>
      <div id="HomeSuccess-manage-div" className="container">
        <div className="row text-center">
 
          <div id="HomeSuccess-div" className="col-xl-3 col-lg-6 col-12">
            <div id="success-img">
              <img src={finance1} alt="" />
            </div>
            <div id="success-text">
              <h1 className="text-muted mt-4 mb-4">2179</h1>
              <p>Successful Loan Approval</p>
            </div>
          </div>

          <div id="HomeSuccess-div" className="col-xl-3 col-lg-6 col-12">
            <div id="success-img">
              <img src={team} alt="" />
            </div>
            <div id="success-text">
              <h1 className="text-muted mt-4 mb-4">99%</h1>
              <p>Customer Satisfection</p>
            </div>
          </div>

          <div id="HomeSuccess-div" className="col-xl-3 col-lg-6 col-12">
            <div id="success-img">
              <img src={verified} alt="" />
            </div>
            <div id="success-text">
              <h1 className="text-muted mt-4 mb-4">70+</h1>
              <p>Bank / NBFC's</p>
            </div>
          </div>

          <div id="HomeSuccess-div" className="col-xl-3 col-lg-6 col-12">
            <div id="success-img">
              <img src={medal} alt="" />
            </div>
            <div id="success-text">
              <h1 className="text-muted mt-4 mb-4">5+</h1>
              <p>Award Winner</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeSuccess;
