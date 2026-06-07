import React from "react";
import "../component/ServiceCards.css";
import backpersonalloan from "../Assets/backpersonalLoanimg.png";
import backgoldloan from "../Assets/backgoldLoanimg.png";
import backhomeloan from "../Assets/backhomeloanimg.png";


const ServiceCards = () => {
  return (
    <>
      <div id="serviceacard-main-div">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-12 text-light pb-3">
              <div id="service-cards">
                <div id="service-img">
                  <img src={backpersonalloan} alt="" />
                  <h3 class="text-xl mt-5">Personal Loan</h3>
                </div>
                <div id="servicecards-mid-text">
                  <p>
                    Get Personal Loan Based On &nbsp; Your Credit Profile- From 1 Lakh
                    To 15 Lakh.
                  </p><br/>
                </div>
                <div id="servicecard-btn">
                  <button type="button">Find Out More</button>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-12 text-light pb-3">
              <div id="service-cards">
                <div id="service-img">
                  <img src={backgoldloan} alt="" />
                  <h3 class="text-xl mt-4">Gold Loan</h3>
                </div>
                <div id="servicecards-mid-text">
                  <p style={{fontSize: "19px"}}>
                    The most significant objective is to project gold loans as a
                    'Good Smart Option, as against being the Last Option' for
                    seeking financial credit.
                  </p>
                </div>
                <div id="servicecard-btn">
                  <button type="button">Find Out More</button>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-12 text-light pb-3">
              <div id="service-cards">
                <div id="service-img">
                  <img src={backhomeloan} alt="" />
                  <h3 class="text-xl mt-5">Home Loan</h3>
                </div>
                <div id="servicecards-mid-text">
                  <p>
                    Various insurers in India & buy insurance policy online. Get
                    instant quotes & save huge on premiums.
                  </p>
                </div>
                <div id="servicecard-btn">
                  <button type="button">Find Out More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
