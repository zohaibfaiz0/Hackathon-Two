'use client'
import React, { useState } from 'react'

const BillingDetails = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('bank-transfer')

  return (
    <div className="w-full">
      <div className="w-full max-w-[1440px] relative mx-auto px-4 md:px-0">
        <div className="w-full bg-white">
          <div className="w-full max-w-[1242px] mx-auto py-[63px]">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Billing Details */}
              <div className="w-full md:w-[608px] mb-8 md:mb-0">
                <div className="bg-white">
                  <h2 className="text-black text-4xl font-semibold mb-8">Billing details</h2>
                  
                  {/* Name Inputs */}
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="w-full md:w-[212px]">
                      <label className="block text-black text-base font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full h-[75px] bg-white rounded-[10px] border border-[#9f9f9f] px-4"
                      />
                    </div>
                    <div className="w-full md:w-[212px]">
                      <label className="block text-black text-base font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full h-[75px] bg-white rounded-[10px] border border-[#9f9f9f] px-4"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="mb-6">
                    <label className="block text-black text-base font-medium mb-2">Company Name (Optional)</label>
                    <input 
                      type="text" 
                      className="w-full h-[75px] bg-white rounded-[10px] border border-[#9f9f9f] px-4"
                    />
                  </div>

                  {/* Country/Region */}
                  <div className="mb-6">
                    <label className="block text-black text-base font-medium mb-2">Country / Region</label>
                    <div className="relative">
                      <select 
                        className="w-full h-[75px] bg-white rounded-[10px] border border-[#9f9f9f] px-4 appearance-none"
                      >
                        <option>Sri Lanka</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Other Inputs */}
                  {['Street address', 'Town / City', 'Province', 'ZIP code', 'Phone', 'Email address'].map((label) => (
                    <div key={label} className="mb-6">
                      <label className="block text-black text-base font-medium mb-2">{label}</label>
                      <input 
                        type="text" 
                        className="w-full h-[75px] bg-white rounded-[10px] border border-[#9f9f9f] px-4"
                      />
                    </div>
                  ))}

                  {/* Additional Information */}
                  <div>
                    <textarea 
                      placeholder="Additional information" 
                      className="w-full h-[75px] bg-white rounded-[10px] border border-[#9f9f9f] px-4 py-2"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:ml-8 md:w-[608px]">
  <div className="bg-white">
    <div className="flex justify-between mb-4">
      <span className="text-black text-2xl font-medium">Product</span>
      <span className="text-black text-2xl font-medium">Subtotal</span>
    </div>
    
    <div className="flex justify-between items-center mb-4">
      {/* Image visible ONLY on desktop/laptop */}
      <div className="hidden md:flex items-center mr-4">
        <img 
          src="/path-to-your-image" 
          alt="Product" 
          className="w-20 h-20 object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <span className="text-[#9f9f9f] text-base block">Asgaard sofa</span>
        <div className="text-black text-xs">
          <span>X</span>
          <span className="ml-1">1</span>
        </div>
      </div>
      
      <span className="text-black text-base">Rs. 250,000.00</span>
    </div>
    
    <div className="border-b border-[#d9d9d9] my-4"></div>
    
    <div className="flex justify-between mb-4">
      <span className="text-black text-base">Subtotal</span>
      <span className="text-black text-base">Rs. 250,000.00</span>
    </div>
    
    <div className="flex justify-between mb-8">
      <span className="text-black text-base">Total</span>
      <span className="text-[#b88e2f] text-2xl font-bold">Rs. 250,000.00</span>
    </div>
  </div>
</div>
                    
                    {/* Payment Methods */}
                    <div>
                      <div 
                        className="flex items-center mb-4 cursor-pointer"
                        onClick={() => setSelectedPaymentMethod('bank-transfer')}
                      >
                        <div className={`w-3.5 h-3.5 mr-2 rounded-full ${selectedPaymentMethod === 'bank-transfer' ? 'bg-black' : 'border border-[#9f9f9f]'}`}></div>
                        <span className="text-black text-base">Direct Bank Transfer</span>
                      </div>
                      
                      <p className="text-[#9f9f9f] text-base mb-4 pl-6">
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                      </p>
                      
                      <div 
                        className="flex items-center mb-4 cursor-pointer"
                        onClick={() => setSelectedPaymentMethod('cash-on-delivery')}
                      >
                        <div className={`w-3.5 h-3.5 mr-2 rounded-full ${selectedPaymentMethod === 'cash-on-delivery' ? 'bg-black' : 'border border-[#9f9f9f]'}`}></div>
                        <span className="text-black text-base">Cash On Delivery</span>
                      </div>
                    </div>
                    
                    <p className="text-justify text-base mb-8">
                      Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy.</span>
                    </p>
                    
                    <div className="flex justify-center">
                      <button className="w-full md:w-[318px] h-16 rounded-[15px] border border-black text-xl">
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default BillingDetails