import React from 'react'

const CheckOutBanner = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1440px] h-[316px] relative mx-auto">
        <img 
          className="w-full h-full absolute object-cover" 
          src="/assets/Rectangle 1.png"  
          alt="CheckOut Banner" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <div className="text-black text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] tracking-wider mb-6">
            CheckOut
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-black text-base md:text-lg font-medium font-['Poppins'] hover:text-[#b88e2f] transition-colors">
              Home
            </div>
            <div className="text-black text-base md:text-lg font-light font-['Poppins'] opacity-70">
              /
            </div>
            <div className="text-black text-base md:text-lg font-light font-['Poppins']">
             CheckOut
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOutBanner