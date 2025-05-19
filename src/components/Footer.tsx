
import React from "react";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-6 mt-auto ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-row md:flex-row items-start md:items-center gap-2">
          <div>
            <h2 className="text-primary text-4xl font-bold italic ">Zuperr</h2>

            <div className="mt-10 border border-gray-300 rounded-2xl p-6 border-radius-18px max-w-xs">
          <p className="text-gray-700 font-medium">
            Never miss a job opportunity with real-time alerts on our app!
          </p>
          <div className="mt-2">
            <img 
              src="./google_play.png" 
              alt="Google Play" 
              className="h-16"
            />
          </div>
        </div>
          </div >
          
          <nav className="flex flex-wrap md:flex md:space-x-20 text-sm
           mb-20 md:mb-24 -mt-24">
            <a href="#" className="hover:text-primary mb-2 md:mb-0">About Us</a>
            <a href="#" className="hover:text-primary mb-2 md:mb-0">Contact Us</a>
            <a href="#" className="hover:text-primary mb-2 md:mb-0">Trust & Safety</a>
            <a href="#" className="hover:text-primary mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms & Conditions</a>
          </nav>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <p className=" flex flex-wrap gap-4 max-w-md text-large  text-gray-2400 ml-2 ">Give us a Call <span className="font-normal text-gray-500">99999 99999</span></p>
          </div>
          </div>
         </div>

        <div className=" w-2/3 h-30px border-t border-gray-300 px-2 py-2 flex space-x-4 ml-auto mb-14 md:mb-16 -mt-16 justify end">
            <a href="#" className="text-gray-600 hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <Facebook size={20} />
            </a>
          </div>
        
        <div className=" mt-6 pt-4 text-xs text-gray-500 text-right mb-18 md:mb-24 -mt-22 ">
          © 2024 ZUPERR. ALL RIGHTS RESERVED.
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;