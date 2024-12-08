import React from 'react'

const ShopBar = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1440px] h-auto md:h-[100px] relative mx-auto">
        <div className="w-full h-full absolute bg-[#f9f1e7]" />
        
        <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-4 md:py-0">
          {/* Filter Section */}
          <div className="w-full md:w-[85px] h-[30px] flex items-center justify-start md:absolute md:left-[98px] md:top-[35px]">
            <div className="flex items-center">
              <div className="w-[25px] h-[25px] mr-2 flex justify-center items-center">
                {/* Filter icon can be added here if needed */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-black text-xl font-normal font-['Poppins']">Filter</div>
            </div>
          </div>
        
          {/* Result Count Section */}
          <div className="w-full md:w-[237px] flex items-center justify-center md:absolute md:left-[312px] md:top-[31px] my-2 md:my-0">
            <div className="hidden md:block w-[37px] h-[0px] origin-top-left rotate-90 border-2 border-[#9f9f9f] mr-2"></div>
            <div className="text-black text-base font-normal font-['Poppins']">
              Showing 1–16 of 32 results
            </div>
          </div>
        
          {/* Show Section */}
          <div className="w-full md:w-[126px] flex items-center justify-between md:justify-start md:absolute md:left-[897px] md:top-[22px]">
            <div className="text-black text-xl font-normal font-['Poppins'] mr-2">Show</div>
            <div className="w-[55px] h-[55px] bg-white flex items-center justify-center">
              <div className="text-[#9f9f9f] text-xl font-normal font-['Poppins']">16</div>
            </div>
          </div>
        
          {/* Sort By Section */}
          <div className="w-full md:w-72 flex items-center justify-between md:justify-start md:absolute md:left-[1052px] md:top-[22px] mt-2 md:mt-0">
            <div className="text-black text-xl font-normal font-['Poppins'] mr-2">Sort by</div>
            <div className="w-[188px] h-[55px] bg-white flex items-center justify-center">
              <div className="text-[#9f9f9f] text-xl font-normal font-['Poppins']">Default</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopBar