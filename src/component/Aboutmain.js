import React from "react";
import "../component/Aboutmain.css";
import fastloan from "../Assets/loan (2) 1.jpg";
import money from "../Assets/money (1) 1.jpg";
import group1 from "../Assets/group 1.jpg";
import help1 from "../Assets/help-web-button 1.jpg";


const Aboutmain = () => {
  return (
    <>
      <div id="aboutmain-div" className="container">
        <div id="aboutmain-title">
          <h3>How It Works</h3>
        </div>

        <div id="about-boxes" className="row">
          <div className="col-lg-6 col-12">
            <div id="inner-box">
              <div id="box-img">
                <img src={fastloan} alt="" />
              </div>
              <div id="box-text" className="text-center text-light">
                <h3>Fast Loans</h3>
                <p>
                  We are always flexible enough to cover all of your financial
                  needs, whichever those might be. Regardless of whether you're
                  about to make a first-time home purchase.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div id="inner-box">
              <div id="box-img">
                <img src={money} alt="" />
              </div>
              <div id="box-text" className="text-center text-light">
                <h3>Flexible Money</h3>
                <p>
                  We understand that financial situations, credit scores, and
                  other fi- nancially-related things can vary.That is why we
                  employ a flexible, person-centric approach to each.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div id="inner-box">
              <div id="box-img">
                <img src={group1} alt="" />
              </div>
              <div id="box-text" className="text-center text-light">
                <h3>Seasoned team</h3>
                <p>
                  Our experts spent last few years excelling their skills and
                  expanding their practical knowledge. We're the best, each of
                  our crew mem- bers is!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div id="inner-box">
              <div id="box-img">
                <img src={help1} alt="" />
              </div>
              <div id="box-text" className="text-center text-light">
                <h3>Helpful</h3>
                <p>
                  With so many mortgages and loans featuring interest rates that
                  are just outright bad, we're here to level the field. Thanks
                  to our re- financing and home equity loan programs you'll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutmain;
