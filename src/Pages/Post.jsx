import React from 'react';
import pic6 from "../Images/cartoon.png";

function Post() {
  return (
    <div className="bg-[#072F57] w-full max-w-[1316px] mx-auto rounded-md mt-4 flex flex-wrap md:flex-nowrap justify-center items-center p-6 md:p-10 gap-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={pic6} alt="Cartoon Illustration" className="max-w-full h-auto" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 mb-6">
          {/* Buyer Section */}
          <div>
            <p className="font-[poppins] text-[20px] md:text-[26px] text-[#EB7150] font-bold">
              Buyer
            </p>
            <hr className="h-1 w-[100px] md:w-[202px] bg-[#EB7150] mx-auto md:mx-0" />
          </div>
          {/* Supplier Section */}
          <p className="font-[poppins] text-[20px] md:text-[26px] font-bold text-white">
            Supplier
          </p>
        </div>

        {/* Description */}
        <p className="font-[poppins] text-[16px] md:text-[18.75px] text-white leading-relaxed">
          Post your requirements. <br />
          Sit back for multiple suppliers to contact you. <br />
          Choose among the suppliers based on the ratings and reviews.
        </p>
      </div>
    </div>
  );
}

export default Post;
