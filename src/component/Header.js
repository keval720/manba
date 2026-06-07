import React from "react";
import "../component/Header.css";
import logo from "../Assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="container" id="main-div">
        <div id="nav-div">
          <div id="nav-left">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <span>Manba Finaserve</span>
            </div>
          </div>
          <div id="toggle-btn-m">
          <button
            class="btn btn-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-right"
            aria-expanded="false"
            aria-controls="nav-right"
            aria-label="Toggle navigation"
            id="toggle-btn"
          >
            <IoMenu />
          </button>
        </div>
        </div>

        <div id="nav-right">
          <ul className="collapse d-flex">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
