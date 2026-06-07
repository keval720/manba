import React from "react";
import "../component/Contact.css";
import office from "../Assets/office-building 1(2).jpg";
import oldtel from "../Assets/old-typical-phone 1.jpg";
import email2 from "../Assets/email 2.jpg";

const Contact = () => {
  return (
    <>
      <div id="contact-main-div" className="container">
        <div id="contact-title">
          <h1>We are here to help you</h1>
          <p>
            Various versions have evolved over the years sometimes by accident
            sometimes on purpose injected humour and the like.
          </p>
        </div>
        
        <div id="contact-div" className="row">
          <div className="col-xl-4 col-lg-6 text-center">
            <div id="inner-div">
              <img src={office} alt="" />
              <h3>branch office</h3>
              <p>312, super diamond market, surat</p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 text-center">
            <div id="inner-div">
              <img src={oldtel} alt="" />
              <h3>Call Us At</h3>
              <p>+91 22 6212 5000</p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 text-center">
            <div id="inner-div">
              <img src={email2} alt="" />
              <h3>E-mail Address</h3>
              <p>Manbafinaserve@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
