import React from "react";
import "./HomeAbout.css";
import homeaboutimg from "../Assets/HomeAboutimg.png";
import num1 from "../Assets/aboutimg1.png";
import num2 from "../Assets/aboutimg2.png";
import num3 from "../Assets/aboutimg3.png";

const HomeAbout = () => {
  return (
    <>
      <div id="homeabout-div">
        <div className="container">
          <div id="homeabout-title">
            <h1>Why Choose Us</h1>
          </div>

          <div id="homeabout-main-div" className="text-light text-center">
            <div id="homeabout-inner-div">
              <div id="homeabout-img">
                <img src={homeaboutimg} alt="" />
              </div>
            </div>
            <div id="homeabout-inner-div" className="text-start">
              <div>
                <p>
                  At Manba finanserve, we are more than a loan services provider
                  we are your gateway to financial confidence. When you choose
                  us, you're choosing a dedicated team of professionals who are
                  passionate about helping you achieve your financial goals.
                  Your success is our success, and we're excited to embark on
                  this journey with you. We invite you to experience the Manba
                  finanserve difference – where your financial well-being is our
                  top priority.
                </p>
              </div>
              <div id="right-bottom-div">
                <div id="about-3line">
                  <div id="about-num-img">
                    <img src={num1} alt="" />
                  </div>
                  <div id="about-info">
                    <h3>Trusted Expertise</h3>
                    <p>
                      With decades of experience in the financial industry, we
                      have earned the trust of countlessindividuals and
                      businesses.
                    </p>
                  </div>
                </div>

                <div id="border-div">{/* for border */}</div>
                <div id="about-3line">
                  <div id="about-num-img">
                    <img src={num2} alt="" />
                  </div>
                  <div id="about-info">
                    <h3>Comprehensive Loan Options</h3>
                    <p>
                      We offer a diverse range of loan products to meet every
                      need. Whether you're looking for a personal loan, a gold
                      loan, home loan, or any other type of loan, we have a
                      solution designed just for you.
                    </p>
                  </div>
                </div>

                <div id="border-div">{/* for border */}</div>
                <div id="about-3line">
                  <div id="about-num-img">
                    <img src={num3} alt="" />
                  </div>
                  <div id="about-info">
                    <h3>Competitive Rates</h3>
                    <p>
                      We believe that access to funds should be affordable.
                      That's why we offer some of the most competitive interest
                      rates in the market. We work tirelessly to ensure that
                      borrowing with us is cost-effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
