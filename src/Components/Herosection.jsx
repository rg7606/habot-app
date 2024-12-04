import React from 'react';
import pic3 from "../Images/search.png";
import pic5 from "../Images/map.png";

function Herosection() {
    return (
        <div className="abc w-full pt-6 mt-2 h-[609px] justify-center bg-slate-500 flex flex-col items-center">
            {/* Heading Section */}
            <div className="flex flex-col items-center text-center w-full px-4">
                <h1 className="font-[poppins] text-[30px] sm:text-[40px] lg:text-[55px] font-bold text-white">
                    Are You a Supplier?
                </h1>
                <p className="text-white text-[16px] sm:text-[20px] lg:text-[28px] mt-2">
                    Explore Matching Opportunities.
                </p>
            </div>

            {/* Search Section */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center pt-10 px-4 w-full">
                <div className="w-full lg:w-[400px] h-[56px] rounded-[5px] bg-[#FFFFFF] flex items-center gap-4 px-4">
                    <img className="h-[21px] w-[21px]" src={pic3} alt="Search Icon" />
                    <input
                        className="flex-1 text-sm outline-none"
                        type="text"
                        placeholder="Search your required service here"
                    />
                </div>
                <div className="w-full lg:w-[400px] h-[56px] rounded-[5px] bg-[#FFFFFF] flex items-center gap-4 px-4">
                    <img className="h-[21px] w-[21px]" src={pic5} alt="Map Icon" />
                    <input
                        className="flex-1 text-sm outline-none"
                        type="text"
                        placeholder="Search your location here"
                    />
                </div>
                <button className="h-[54px] w-[120px] bg-[#00732F] rounded-[5px] text-white font-[inter] text-[14px] lg:text-[15.13px] font-bold">
                    Search
                </button>
            </div>

            {/* Buyer Section */}
            <div className="flex flex-wrap justify-center items-center text-center gap-2 pt-6 px-4">
                <p className="font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] text-white font-bold">
                    Are you a buyer?
                </p>
                <p className="underline font-[regular] text-[14px] sm:text-[16px] lg:text-[18px] text-white">
                    Click here if you are looking to post a requirement
                </p>
            </div>
        </div>
    );
}

export default Herosection;
