import React from "react";
import logo from '../../../images/logos/logo.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-base-content font-mono footer-info text-center bg-primary">
        <div className="md:pl-20 pl-4 mx-auto">
         <img className="w-3/6" src={logo} alt="" />
          <p className="text-2xl font-semibold text-secondary">Cretive Agency</p>
          <p>Your New Smile Starts Here</p>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-2xl text-secondary font-semibold">
            Services
          </span>
          <p className="text-xl text-white">Branding</p>
          <p className="text-xl text-white">Design</p>
          <p className="text-xl text-white">Marketing</p>
          <p className="text-xl text-white">Advertisement</p>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-2xl text-secondary font-semibold">
            Company
          </span>
          <p className="text-xl text-white">About us</p>
          <p className="text-xl text-white">Contact</p>
          <p className="text-xl text-white">Jobs</p>
          <p className=" text-xl text-white">Press kit</p>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-2xl text-secondary font-semibold">
            Legal
          </span>
          <p className="text-white text-xl">Terms of use</p>
          <p className="text-xl text-white">Privacy policy</p>
          <p className="text-xl text-white">Cookie policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
