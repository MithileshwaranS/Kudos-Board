import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaDiscord, FaTelegram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#201F1F] text-white w-full h-[379px] p-8 relative">
      {/* Top Row: Contact Us on the left, Make Money with Us on the right */}
      <div className="flex justify-between  ">
        {/* Contact Us Section */}
        <div>
          <h2 className="text-2xl font-array text-[60px] mb-4">
            <span className="text-customGreen">Contact </span>
            <span className="text-white">us</span>
          </h2>
          <div className="flex space-x-4 mb-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-green-500"><FaInstagram size={16} /></a>
            <a href="#" className="hover:text-green-500"><FaFacebookF size={16} /></a>
            <a href="#" className="hover:text-green-500"><FaTwitter size={16} /></a>
            <a href="#" className="hover:text-green-500"><FaYoutube size={16} /></a>
            <a href="#" className="hover:text-green-500"><FaDiscord size={16} /></a>
            <a href="#" className="hover:text-green-500"><FaTelegram size={16} /></a>
            <a href="#" className="hover:text-green-500"><FaLinkedinIn size={16} /></a>
          </div>
        </div>

        {/* Make Money with Us Section */}
        <div>
          <h2 className="font-array text-[50px]">
            <span className="text-customGreen">Make Money </span>
            <span className="text-white">with us</span>
          </h2>
        </div>
      </div>

      <div className="font-ibm text-[16px] flex justify-between">
        {/* Terms and Condition */}
        <ul className=" space-y-2 underline">
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Refund and Cancellation Policy</li>
          <li>Shipping and Delivery Policy</li>
        </ul>

        {/* Make money with us*/}
        <ul className=" text-[#EFE8DF] font-array text-[30px] text-right leading-tight">
          <li>Share and Earn</li>
          <li>Become a Sales Executive </li>
          <li>Collaboration? We are in!</li>
        </ul>

       
      </div>
      <div className="text-center mt-8 font-array text-[30px] ">
            <p>
              <span className="text-white">Content Creators & Designers get part in the </span>
              <span className="text-customGreen">KUDOS-BOARD </span>
              <span>!</span>
            </p>
        </div>
        <div className="absolute bottom-4 left-4 font-neuo text-[12px] leading-8">
            <p>&copy; {new Date().getFullYear()} X57. All rights reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
