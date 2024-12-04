import React from 'react';
import pic from "../Images/logodone.png";
import pic1 from "../Images/linkedin.png";
import pic2 from "../Images/twitter.png";
import pic3 from "../Images/facebook.png";
import pic4 from "../Images/instagram.png";

function FooterTwo() {
  return (
    <div className="bg-[#123557] w-full py-8 flex flex-col lg:flex-row items-center lg:justify-around text-center lg:text-left">
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
        {/* Logo Section */}
        <div>
          <img className="h-[40px] w-[206px] mx-auto lg:mx-0" src={pic} alt="Logo" />
          <p className="text-white text-[16px] font-[poppins] mt-4">© R Singhania</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10 text-white">
          {/* Company Section */}
          <div>
            <p className="text-[15.13px] font-bold font-[arial]">Company</p>
            <ul className="text-[14px] mt-4 space-y-2">
              <li>About</li>
              <li>Faq</li>
            </ul>
          </div>

          {/* Terms Section */}
          <div>
            <p className="text-[15.13px] font-bold font-[arial]">Terms</p>
            <ul className="text-[14px] mt-4 space-y-2">
              <li>Data privacy</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Related Section */}
          <div>
            <p className="text-[15.13px] font-bold font-[arial]">Related</p>
            <ul className="text-[14px] mt-4 space-y-2">
              <li>Find Buyer</li>
              <li>Feedback</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center lg:justify-start items-center gap-5 mt-8 lg:mt-0">
        <img className="h-[40px] w-[40px]" src={pic1} alt="LinkedIn" />
        <img className="h-[40px] w-[40px]" src={pic2} alt="Twitter" />
        <img className="h-[40px] w-[40px]" src={pic3} alt="Facebook" />
        <img className="h-[40px] w-[40px]" src={pic4} alt="Instagram" />
      </div>
    </div>
  );
}

export default FooterTwo;
