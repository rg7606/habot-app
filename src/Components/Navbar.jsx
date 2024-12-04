import React from 'react';
import pic from "../Images/logo.png";

function Navbar() {
    return (
        <div className="flex flex-wrap items-center justify-between px-4 py-3 lg:px-10 w-full bg-white">
            {/* Logo Section */}
            <img className="h-[43px] w-[181px]" src={pic} alt="Logo" />

            {/* Menu Items */}
            <div className="hidden lg:flex font-[poppins] text-[15.25px] items-center text-[#6D6E71] gap-12">
                <p>Find Suppliers</p>
                <select className="border rounded-[5px] p-1 text-[#6D6E71]" name="" id="">
                    <option value="">Find Service Tags</option>
                </select>
                <button className="font-[inter] text-[15px] border border-green-500 rounded-[5px] w-[193px] h-[50px]">
                    Login/Sign Up
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center gap-4">
                <select className="border rounded-[5px] p-1 text-[#6D6E71] text-sm" name="" id="">
                    <option value="">Service Tags</option>
                </select>
                <button className="text-sm border border-green-500 rounded-[5px] px-4 py-2 hover:bg-green-700 ">
                    Login/Sign Up
                </button>
            </div>
        </div>
    );
}

export default Navbar;
