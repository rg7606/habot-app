import React from 'react';

function LetSupport() {
  return (
    <div className="w-full h-auto bg-[#E8FBFF] flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 gap-4">
      {/* Left Section */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-[24px] sm:text-[28px] md:text-[37.34px] font-[poppins] font-semibold">
          Let Suppliers Find You
        </h1>
        <hr className="h-1 w-[150px] mx-auto md:ml-0 bg-[#EB7150] mt-2" />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <button className="w-[160px] sm:w-[180px] md:w-[216px] h-[40px] sm:h-[48px] md:h-[54px] bg-[#EB7150] text-white font-bold text-[16px] sm:text-[18px] font-[poppins] rounded-md shadow-lg">
          Get Verified
        </button>
      </div>
    </div>
  );
}

export default LetSupport;
