import React from "react";
import "../component/Footer.css";
import footerlogo from "../Assets/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div id="footer-main-div">
        <div className="container pt-5 pb-5">
          <div id="footer-logo" className="text-center">
            <img src={footerlogo} alt="" />
            <h4>Manba Finaserve</h4>
            <hr />
          </div>

          <div className="row text-light">
            <div id="left-text" className="col-xl-6 col-lg-6 col-12">
              <p className="h6">
                With thousands of people starting up new businesses every day,
                thousands of fami- lies looking for a new mortgage and so on,
                the loan companies play a vital role in the today's society...
              </p>
              <span>
                <CiLocationOn /> 312, superdiamond market
              </span>
              <span>
                <IoCallOutline /> +91 22 6212 5000
              </span>
            </div>

            <div id="footer-lists" className="col-xl-2 col-lg-6 col-12">
              <h5>Pages</h5>

              <ul>
                <li>
                  <FaAngleRight /> <a href="/">Home</a>
                </li>
                <li>
                  <FaAngleRight /> <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <FaAngleRight /> <a href="/contactUs">Contact Us</a>
                </li>
                <li>
                  <FaAngleRight /> <a href="/services">Services</a>
                </li>
              </ul>
            </div>

            <div id="footer-lists" className="col-xl-2 col-lg-6 col-12">
              <h5>Loan</h5>

              <ul>
                <li>
                  <FaAngleRight /> <a href="/homeloan">Home loan</a>
                </li>
                <li>
                  <FaAngleRight /> <a href="/personalloan">Personal loan</a>
                </li>
                <li>
                  <FaAngleRight /> <a href="/goldloan">Gold loan</a>
                </li>
                <li>
                  <FaAngleRight /> <a href="/businessloan">Business loan</a>
                </li>
              </ul>
            </div>

            <div id="footer-lists" className="col-xl-2 col-lg-6 col-12">
              <h5>Social Media</h5>

              <ul>
                <li>
                  <FaFacebookF /> <a href="kevalj720@gmail.com">Facebook</a>
                </li>
                <li>
                  <IoLogoInstagram /> <a href="/instagram">Instagram</a>
                </li>
                <li>
                  <FaXTwitter /> <a href="/x">Twitter</a>
                </li>
                <li>
                  <FaLinkedinIn /> <a href="/linkedin">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="footer-last-row" className="container">
        <div>
          <p className="m-0">© Manba Finanserve Holdings Limited</p>
        </div>
        <div>
          <span>
            <IoMailSharp fontSize={25} /> manbafinaserve@gmail.com
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
