import React from 'react'

const HeroSecOne = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Full Width Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/assets/HeroSec.png"  
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-[643px] bg-[#fff2e3] rounded-[10px] p-4 md:p-8 ml-auto w-full md:w-auto">
            <div className="space-y-4 md:space-y-6">
              {/* New Arrival Tag */}
              <div className="text-[#333333] text-sm md:text-base font-semibold tracking-[3px]">
                New Arrival
              </div>

              {/* Main Headline */}
              <h1 className="text-[#b88e2f] text-3xl md:text-[52px] font-bold leading-tight">
                Discover Our New Collection
              </h1>

              {/* Description */}
              <p className="text-[#333333] text-sm md:text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis.
              </p>

              {/* Call to Action Button */}
              <button 
                className="bg-[#b88e2f] text-white font-bold uppercase 
                px-6 md:px-12 py-2 md:py-4 rounded-md hover:bg-[#a57d28] 
                transition-colors duration-300 text-sm md:text-base"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSecOne