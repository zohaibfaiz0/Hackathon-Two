import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-black/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Company Info */}
          <div className="md:w-1/4">
            <div className="text-2xl font-bold text-black mb-4">
              Funiro.
            </div>
            <p className="text-[#9f9f9f] text-base">
              400 University Drive Suite 200 
              <br />
              Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Container */}
          <div className="flex flex-col md:flex-row md:w-3/4 space-y-8 md:space-y-0 md:space-x-8">
            {/* Links Column */}
            <div className="md:w-1/3">
              <h3 className="text-[#9f9f9f] text-base font-medium mb-4">Links</h3>
              <ul className="space-y-4">
                {['Home', 'Shop', 'About', 'Contact'].map((link) => (
                  <li key={link} className="text-black text-base font-medium">
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Column */}
            <div className="md:w-1/3">
              <h3 className="text-[#9f9f9f] text-base font-medium mb-4">Help</h3>
              <ul className="space-y-4">
                {['Payment Options', 'Returns', 'Privacy Policies'].map((link) => (
                  <li key={link} className="text-black text-base font-medium">
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:w-1/3">
              <h3 className="text-[#9f9f9f] text-base font-medium mb-4">Newsletter</h3>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  className="w-full border-b border-black pb-2 text-[#9f9f9f] text-sm focus:outline-none"
                />
                <button className="absolute right-0 top-0 text-black text-sm font-medium">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-4 border-t border-[#d9d9d9]">
          <p className="text-black text-base">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer