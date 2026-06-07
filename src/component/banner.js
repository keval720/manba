import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div id="banner-div">
        <div id="img-contant" className="container">
          <h2>Bring Your Aspirations To Life,</h2>
          <span>With A Quick Loan.</span>
          <p>
            Welcome to Manba Finance, where you can find a loan <br/>
            solutioncustomised for your needs.
          </p>
          <div className="pt-4">
            <a href="/contactus" id="apply-a">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
