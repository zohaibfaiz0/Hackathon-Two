import React from 'react'

const CartSomething = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1440px] h-auto relative mx-auto px-4 md:px-0">
        <div className="w-full h-full bg-white">
          <div className="w-full max-w-[1240px] h-auto mx-auto py-[72px]">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Product Details */}
              <div className="w-full md:w-[817px]">
                <div className="w-full h-auto">
                  <div className="w-full h-[55px] bg-[#f9f1e7]">
                    <div className="flex justify-between px-4 md:px-[142px] pt-4">
                      <span className="text-black text-base font-medium font-['Poppins']">Product</span>
                      <span className="text-black text-base font-medium font-['Poppins']">Price</span>
                      <span className="text-black text-base font-medium font-['Poppins']">Quantity</span>
                      <span className="text-black text-base font-medium font-['Poppins']">Subtotal</span>
                    </div>
                  </div>

                  {/* Product Row */}
                  <div className="flex items-center py-4 px-4 md:px-0">
                    <div className="w-[108px] mr-4">
                      <div className="w-[105px] h-[105px] relative">
                        <div className="absolute w-full h-full bg-[#b88e2f]/20 rounded-[10px]"></div>
                        <img 
                          className="w-[111px] h-[90px] absolute top-[7px]  rounded-[10px]" 
                          src="/assets/sofa676.png" 
                          alt="Sofa"
                        />
                      </div>
                    </div>
                    <div className="flex-grow flex justify-between items-center">
                      <span className="text-[#9f9f9f] text-base">Asgaard sofa</span>
                      <span className="text-black text-base">Rs. 250,000.00</span>
                      <div className="w-8 h-8 rounded-[5px] border border-[#9f9f9f] flex items-center justify-center">
                        <span className="text-black text-base">1</span>
                      </div>
                      <span className="text-black text-base">Rs. 250,000.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Cart Totals */}
              <div className="w-full md:w-[393px] mt-6 md:mt-0 md:ml-6">
                <div className="bg-[#f9f1e7] p-6 rounded-lg">
                  <h2 className="text-black text-[32px] font-semibold text-center mb-6">Cart Totals</h2>
                  
                  <div className="flex justify-between mb-4">
                    <span className="text-black text-base font-medium">Subtotal</span>
                    <span className="text-[#9f9f9f] text-base">Rs. 250,000.00</span>
                  </div>
                  
                  <div className="flex justify-between mb-6">
                    <span className="text-black text-base font-medium">Total</span>
                    <span className="text-[#b88e2f] text-xl font-medium">Rs. 250,000.00</span>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="w-[222px] h-[58.95px] rounded-[15px] border border-black text-xl">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSomething