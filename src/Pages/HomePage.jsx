import React from "react";


function HomePage() {
    return (
        <div className="bg-[#EFEBDF] relative h-screen">
            {/* Heading Section */}
            <div className="relative z-0">
                <h1 className="font-array text-center text-white">
                    <span className="text-[150px] text-[#201F1F]">STEERING </span>
                    <span className="font-playwrite text-customGreen text-[90px] text-shadow-customGreen">lifestyle </span>
                    <span className="text-[150px] text-[#201F1F]">XD</span>
                </h1>
            </div>

            {/* Image Section */}
            <div className=" w-[705px] h-[754px] flex justify-center items-center absolute top-[61%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <img src="src/assets/hoodie.png" alt="hoodie-image" />
            </div>
        </div>
    );
}

export default HomePage;
