'use client'
import React, { useState } from 'react'
import { CiShoppingCart, CiUser , CiHeart, CiSearch, CiMenuBurger } from "react-icons/ci"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  
  return (
    <>
      <nav className="w-full bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image 
              width={50}
              height={32}
              src="/assets/Meubel House_Logos-05.png" 
              alt="Furniro Logo"
            />
            <div className="text-black text-2xl md:text-[34px] font-bold font-['Montserrat']">
              Furniro
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              <CiMenuBurger className="w-6 h-6" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className={`
            fixed inset-0 bg-white z-50 flex flex-col items-center justify-center 
            md:static md:flex md:flex-row md:w-auto md:space-x-8 
            ${isMenuOpen ? 'block' : 'hidden'}
          `}>
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 md:hidden text-2xl"
            >
              ×
            </button>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link href="/" passHref>
                <div className="text-black text-base font-medium font-['Poppins'] cursor-pointer hover:text-gray-600">
                  Home
                </div>
              </Link>
              <Link href="/Shop" passHref>
                <div className="text-black text-base font-medium font-['Poppins'] cursor-pointer hover:text-gray-600">
                  Shop
                </div>
              </Link>
              <Link href="/About" passHref>
                <div className="text-black text-base font-medium font-['Poppins'] cursor-pointer hover:text-gray-600">
                  About
                </div>
              </Link>
              <Link href="/Contact" passHref>
                <div className="text-black text-base font-medium font-['Poppins'] cursor-pointer hover:text-gray-600">
                  Contact
                </div>
              </Link>
            </div>
          </div>
          
          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            <CiUser  className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" />
            <CiSearch className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" />
            <CiHeart className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" />
            <CiShoppingCart 
              onClick={toggleCart} 
              className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" 
            />
          </div>
        </div>
      </nav>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-lg z-50 transform translate-x-0 transition-transform duration-300 ease-in-out">
          <div className="flex justify-center items-start h-full bg-white p-6">
            <div className="w-full">
              <div className="relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-black">Shopping Cart</h2>
                  <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-4"></div>

                {/* Cart Items */}
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-24 h-24 bg-[#b88e2f]/20 rounded-lg overflow-hidden">
                        <img 
                          src="/assets/sofani1.png" 
                          alt="Asgaard sofa" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-normal">Asgaard sofa</h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <span>1</span>
                        <span>X</span>
                        <span className="text-[#b88e2f] font-medium">Rs. 250,000.00</span>
                      </div>
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-24 h-24 bg-[#b88e2f]/20 rounded-lg overflow-hidden">
                        <img 
                          src="/assets/sofani.png" 
                          alt="Casaliving Wood" className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-normal">Casaliving Wood</h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <span>1</span>
                        <span>X</span>
                        <span className="text-[#b88e2f] font-medium">Rs. 270,000.00</span>
                      </div>
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-base font-normal">Subtotal</span>
                  <span className="text-base font-semibold text-[#b88e2f]">Rs. 520,000.00</span>
                </div>

               {/* Action Buttons */}
<div className="mt-4 flex flex-col space-y-3">
<Link href ="/CheckOut">
  <button 
    className="w-full px-6 py-3 bg-[#b88e2f] text-white rounded-lg 
    hover:bg-[#a37c27] transition duration-300 ease-in-out 
    flex items-center justify-center space-x-2"
  >
    <span>Continue to Checkout</span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
        clipRule="evenodd" 
      />
    </svg>
  </button>
  </Link>
  <div className="flex justify-between space-x-2">
  <Link href ="/Cart">
    <button 
      className="flex-1 px-4 py-3 border border-[#b88e2f] text-[#b88e2f] 
      rounded-lg hover:bg-[#b88e2f]/10 transition duration-300 ease-in-out"
    >
      View Cart
    </button>
    </Link>
    
    <Link href ="/Comparision">
      <button 
        className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 
        rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        Compare
      </button>
    </Link>
  </div>
  </div></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;