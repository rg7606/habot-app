import React from 'react';
import pic6 from "../Images/faceicon.png";
import pic7 from "../Images/notebook.png";
import pic8 from "../Images/notepen.png";
import pic9 from "../Images/notepencile.png";
import pic10 from "../Images/hand.png";
import pic11 from "../Images/notesearch.png";

function Footer() {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-10">
                <h1 className="text-[24px] sm:text-[32px] md:text-[37.34px] font-[poppins] font-semibold">How it works?</h1>
                <p className="text-[14px] sm:text-[16px] md:text-[17.16px] font-regular mt-4">
                    Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <br className="hidden sm:block" />
                    potential buyers, and build successful business relationships, sharing valuable feedback.
                </p>
            </div>

            {/* Steps Section */}
            <div className="flex flex-wrap justify-center gap-6">
                {/* Step 1 */}
                <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto bg-[#E8FBFF] p-6 rounded-lg shadow-lg text-center">
                    <img className="h-[60px] w-[60px] mx-auto mb-4" src={pic6} alt="Step 1" />
                    <p className="text-[14px] sm:text-[16px] font-semibold">Select Your Role and Sign Up</p>
                </div>

                {/* Step 2 */}
                <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto p-6 rounded-lg shadow-lg text-center">
                    <img className="h-[60px] w-[60px] mx-auto mb-4" src={pic7} alt="Step 2" />
                    <p className="text-[14px] sm:text-[16px] font-semibold">Buyers Post Your Requirements</p>
                </div>

                {/* Step 3 */}
                <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto bg-[#E8FBFF] p-6 rounded-lg shadow-lg text-center">
                    <img className="h-[60px] w-[60px] mx-auto mb-4" src={pic11} alt="Step 3" />
                    <p className="text-[14px] sm:text-[16px] font-semibold">Review, Select, and Contact the Best Suppliers</p>
                </div>

                {/* Step 4 */}
                <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto p-6 rounded-lg shadow-lg text-center">
                    <img className="h-[60px] w-[60px] mx-auto mb-4" src={pic8} alt="Step 4" />
                    <p className="text-[14px] sm:text-[16px] font-semibold">
                        Suppliers Complete your Profile and Get Notified for Opportunities
                    </p>
                </div>

                {/* Step 5 */}
                <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto bg-[#E8FBFF] p-6 rounded-lg shadow-lg text-center">
                    <img className="h-[60px] w-[60px] mx-auto mb-4" src={pic9} alt="Step 5" />
                    <p className="text-[14px] sm:text-[16px] font-semibold">
                        Contact Buyers and Share your Quote for the Service
                    </p>
                </div>

                {/* Step 6 */}
                <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto p-6 rounded-lg shadow-lg text-center">
                    <img className="h-[60px] w-[60px] mx-auto mb-4" src={pic10} alt="Step 6" />
                    <p className="text-[14px] sm:text-[16px] font-semibold">
                        Both Parties Can Connect and Make Business, Leave Feedback
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
