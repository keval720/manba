import React from "react";
import '../component/ContactForm.css'

const ContactForm = () => {
  return (
    <>
      <div id="contactFrom-div" className="container">
        <div id="contactfrom-title">
          <h1>Get In Touch</h1>
          <h3 className="mb-5">Please contact us or send us an email.</h3>
        </div>

        <div id="contactform-inputs">
          <div className="row">
            <div className="col-lg-6 col-12 pb-5">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Your Name"
              />
            </div>
            <div className="col-lg-6 col-12 pb-5">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your E-mail"
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 col-12 pb-5">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Your Number"
              />
            </div>
            <div className="col-lg-6 col-12 pb-5">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your City"
              />
            </div>
          </div>

          <div className="row">
            <div id="select-div" className="col-xl-6 col-md-6 col-lg-8 mb-5">
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>----Select Your Loan----</option>
                <option value="1">Home Loan</option>
                <option value="2">Personal Loan</option>
                <option value="3">Gold Loan</option>
                <option value="3">Business Loan</option>
              </select>
            </div>
          </div>

          <div id="contact-message" className="col-12 mt-3">
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Your Message"
            />
          </div>

          <div id="form-sub-btn" className="text-center mt-5">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
