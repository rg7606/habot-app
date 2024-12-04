import React from 'react';

function ReadytoDrive() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start p-6 lg:p-12 gap-8">
      {/* Left Section */}
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="font-[poppins] text-[24px] sm:text-[30px] lg:text-[37.36px] font-bold">
          Ready to dive into HABOT?
        </h1>
        <p className="text-[14px] sm:text-[16px] lg:text-[17.16px] font-light mt-4 leading-relaxed">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="h-[48px] sm:h-[54px] w-full sm:w-[250px] lg:w-[317px] bg-[#00732F] rounded-[5px] text-white font-[inter] text-[14px] sm:text-[15.13px] font-bold mt-6">
          Sign up Today!
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <p className="h-[50px] sm:h-[65px] w-[200px] sm:w-[260px] text-center pt-2 sm:pt-4 border border-[#E7760D] rounded-[5px] hover:bg-orange-400">
            Abu Dhabi
          </p>
          <p className="h-[50px] sm:h-[65px] w-[200px] sm:w-[260px] text-center pt-2 sm:pt-4 border border-[#E7760D] rounded-[5px] hover:bg-orange-400">
            Sharjah & Ajman
          </p>
          <p className="h-[50px] sm:h-[65px] w-[200px] sm:w-[260px] text-center pt-2 sm:pt-4 border border-[#E7760D] rounded-[5px] hover:bg-orange-400">
            Ras Al Khaimah
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <p className="h-[50px] sm:h-[65px] w-[200px] sm:w-[260px] text-center pt-2 sm:pt-4 border border-[#E7760D] rounded-[5px] hover:bg-orange-400">
            Dubai
          </p>
          <p className="h-[50px] sm:h-[65px] w-[200px] sm:w-[260px] text-center pt-2 sm:pt-4 border border-[#E7760D] rounded-[5px] hover:bg-orange-400">
            Fujairah
          </p>
          <p className="h-[50px] sm:h-[65px] w-[200px] sm:w-[260px] text-center pt-2 sm:pt-4 border border-[#E7760D] rounded-[5px] hover:bg-orange-400">
            Umm Al Quwain
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReadytoDrive;
