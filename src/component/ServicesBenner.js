import React from "react";
import "../component/ServicesBanner.css";

const ServicesBenner = () => {
  return (
    <>
      <div id="servicebanner-main-div">
        <div id="servicebanner-div" className="container">
          <div id="servicelink-div">
            <a href="/">home > </a>
            <span> Service</span>
          </div>
          <div id="service-bannertext-div">
            <h1>
              Our <span>Services</span>
            </h1>
            <p>
              Our dedicated customer support team is here to assist you at every
              stage of your loan journey. Whether you have questions about the
              application process or need advice on the right loan for your
              situation, we're just a call or message away.
            </p>
          </div>
          <div className="pt-4">
            <a href="/contactus" id="apply-a">Apply Now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesBenner;
