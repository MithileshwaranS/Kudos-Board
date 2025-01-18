import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaDiscord, FaTelegram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#201F1F] text-white w-full py-8 px-4 sm:px-8 relative">
      {/* Top Row: Contact Us and Make Money with Us */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Contact Us Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-array text-[40px] sm:text-[50px] lg:text-[60px] mb-4">
            <span className="text-customGreen">Contact </span>
            <span className="text-white">us</span>
          </h2>
          <div className="flex justify-center lg:justify-start space-x-4 mb-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-green-500"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-green-500"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-green-500"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-green-500"><FaYoutube size={20} /></a>
            <a href="#" className="hover:text-green-500"><FaDiscord size={20} /></a>
            <a href="#" className="hover:text-green-500"><FaTelegram size={20} /></a>
            <a href="#" className="hover:text-green-500"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Make Money with Us Section */}
        <div className="hidden lg:block text-center lg:text-right">
          <h2 className="font-array text-[40px] sm:text-[50px] lg:text-[60px]">
            <span className="text-customGreen">Make Money </span>
            <span className="text-white">with us</span>
          </h2>
        </div>
      </div>

      {/* Bottom Row: Policies and Opportunities */}
      <div className="font-ibm text-[14px] sm:text-[16px] mt-6 flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Policies Section */}
        <ul className="space-y-2 text-center lg:text-left underline">
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Refund and Cancellation Policy</li>
          <li>Shipping and Delivery Policy</li>
        </ul>

        {/* Make Money Section (Hidden on smaller screens) */}
        <ul className="hidden lg:block text-[#EFE8DF] font-array text-[20px] sm:text-[25px] lg:text-[30px] text-center lg:text-right leading-tight">
          <li>Share and Earn</li>
          <li>Become a Sales Executive</li>
          <li>Collaboration? We are in!</li>
        </ul>
      </div>

      {/* Kudos Board Section */}
      <div className="text-center mt-8 font-array text-[20px] sm:text-[25px] lg:text-[30px]">
        <p>
          <span className="text-white">Content Creators & Designers get part in the </span>
          <span className="text-customGreen">KUDOS-BOARD </span>
          <span>!</span>
        </p>
      </div>

      {/* Footer Bottom */}
      <div className="absolute bottom-4 left-4 text-center lg:text-left font-neuo text-[10px] sm:text-[12px] leading-8">
        <p>&copy; {new Date().getFullYear()} X57. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
