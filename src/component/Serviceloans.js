import React from "react";
import "../component/Serviceloans.css";
import serviceimg from "../Assets/serviceaboutimg.png";

const Serviceloans = () => {
  return (
    <>
      <div id="serviceloan-main-div" className="container">
        <div id="serviceloan-upper-div" className="text-center pb-3">
          <h4>Business Loan</h4>
          <p>
            Get Unsecured Business Loan For Business Expansion And Working
            Capital From 5 Lakh To 5 Cr
          </p>
        </div>

        <div id="serviceloan-middle-div" className="text-center">
          <div className="row d-flex align-items-center">
            <div className="col-xl-4 col-lg-12 pb-3">
              <h4>Personal Loan</h4>
              <p>
                A big Part of financial freedom le having your heart and mind
                free from worry about the whatifs of life.
              </p>
            </div>

            <div className="col-xl-4 col-lg-12 pb-4">
              <div id="service-mid-img">
                <img src={serviceimg} alt="" />
              </div>
            </div>

            <div className="col-xl-4 col-lg-12 pb-3">
                <h4>Gold Loan</h4>
                <p>
                  One can pay back the loan of gold, but one dies forever in
                  debt to those who are kind.
                </p>
            </div>
          </div>
        </div>

        <div id="serviceloan-bottom-div" className="text-center pb-3">
          <h4>Home Loan</h4>
          <p>
            Owning a home is the most desirable thing for all. it acts as your
            fiscal wealth and mental security.
          </p>
        </div>
      </div>
    </>
  );
};

export default Serviceloans;
