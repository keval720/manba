import React from "react";
import "../component/HomeProvide.css";
import provide1 from "../Assets/economy 1.png";
import provide2 from "../Assets/invesment 1.png";
import provide3 from "../Assets/agreement 1.png";
import provide4 from "../Assets/continuous 1.png";

const HomeProvide = () => {
  return (
    <>
      <div className="container" id="provide-div">
        <div id="top-div">
          <div id="provide-inner-div">
            <div id="provide-img">
              <img src={provide1} alt="" />
            </div>
            <div id="provide-contant">
              <p>
                Embark on your loan journey, understanding the right loan type –
                personal for flexibility or business for expansion. Prepare with
                documentation and a strong application, focusing on credit score
                improvement
              </p>
            </div>
          </div>
          <div id="provide-inner-div">
            <div id="provide-img">
              <img src={provide2} alt="" />
            </div>
            <div id="provide-contant">
              <p>
                Unlock major investment potential with loans as a financial
                powerhouse, elevating your financial aspirations. Join us as we
                explore this gateway to seizing big opportunities and realizing
                your financial dreams
              </p>
            </div>
          </div>
        </div>
        <div id="bottom-div">
          <div id="provide-inner-div">
            <div id="provide-img">
              <img src={provide3} alt="" />
            </div>
            <div id="provide-contant">
              <p>
                "Businesses often seek loans for expansion, whether opening new
                locations, boosting production, or diversifying products. Loans
                provide vital capital for growth
              </p>
            </div>
          </div>
          <div id="provide-inner-div">
            <div id="provide-img">
              <img src={provide4} alt="" />
            </div>
            <div id="provide-contant">
              <p>
                In today's dynamic financial landscape, gain essential insights
                for managing money, investments, and securing your financial
                future with our expert financial content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProvide;
