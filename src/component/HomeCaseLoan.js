import React from "react";
import "../component/HomeCaseLoan.css";
import cashloanleftimg from "../Assets/cashloanleftimg.png";

const HomeCaseLoan = () => {
  return (
    <>
      <div id="HomeCaseLoan-manage-div">
        <div className="container">
          <div id="HomeCaseLoan-div" className="row justify-space-between">
            <div className="col-xl-6 col-12 pb-5">
              <div id="cashloan-img">
                <img
                  src={cashloanleftimg}
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div id="cashloan-text">
                <h1>Do you need a small cash loan?</h1>
                <span>
                  We’ll provide you with anythig between ₹1,00,000 and ₹50L !
                </span>
                <p>
                  If you're facing an unexpected financial expense, such as a
                  medical emergency, car repair, or home repair, you may be
                  considering taking out a small cash loan. Small cash loans are
                  typically unsecured loans, which means you don't need to put
                  up any collateral to get them. They can be a good option for
                  people with less-than-perfect credit or who need money
                  quickly.
                </p>
                <div className="pt-4 text-center">
                  <a href="/contactus" id="cashloan-apply-a">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCaseLoan;
