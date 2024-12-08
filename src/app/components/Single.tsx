
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaStar, FaHeart, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Single = () => {
  const [selectedSize, setSelectedSize] = useState('L')
  const [selectedColor, setSelectedColor] = useState('#806df9')
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState('/assets/Asgaard sofa 1.png')

  const sizes = [
    { label: 'L', value: 'L' },
    { label: 'XL', value: 'XL' },
    { label: 'XS', value: 'XS' }
  ]

  const colors = ['#806df9', '#000000', '#b88e2f']

  const productImages = [
    '/assets/Outdoor sofa set_2 1.png',
    '/assets/Outdoor sofa set 2.png',
    '/assets/Stuart sofa 1.png',
    '/assets/sofa.png'
  ]

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    setQuantity(prev => 
      type === 'increase' 
        ? prev + 1 
        : Math.max(1, prev - 1)
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Product Image Gallery */}
        <div className="w-full md:w-1/2 flex">
          {/* Thumbnail Images */}
          <div className="hidden md:block w-24 mr-4 space-y-4">
            {productImages.map((img, index) => (
              <div 
                key={index} 
                className={`
                  w-20 h-20 bg-[#f9f1e7] rounded-[10px] 
                  overflow-hidden cursor-pointer
                  ${mainImage === img ? 'border-2 border-[#b88e2f]' : ''}
                `}
                onClick={() => setMainImage(img)}
              >
                <Image 
                  src={img} 
                  alt={`Thumbnail ${index + 1}`} 
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="flex-grow">
            <div className="bg-[#f9f1e7] rounded-[10px] overflow-hidden">
              <Image 
                src={"/assets/Asgaard sofa 3.png"} 
                alt="Main Product" 
                width={481}
                height={391}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-normal text-black">
            Asgaard sofa
          </h1>
          
          <div className="text-2xl font-medium text-[#9f9f9f]">
            Rs. 250,000.00
          </div>
          
          {/* Rating */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1 text-yellow-500">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <div className="text-[#9f9f9f] text-sm">
              5 Customer Reviews
            </div>
          </div>
          
          <p className="text-[#9f9f9f] text-sm leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          
          {/* Size Selection */}
          <div className="space-y-2">
            <label className="text-sm text-[#9f9f9f]">Size</label>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size.value}
                  onClick={() => setSelectedSize(size.value)}
                  className={`
                    w-10 h-10 rounded-[5px]
                    ${selectedSize === size.value 
                      ? 'bg-[#b88e2f] text-white' 
                      : 'bg-[#f9f1e7] text-black'}
                  `}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Color Selection */}
          <div className="space-y-2">
            <label className="text-sm text-[#9f9f9f]">Color</label>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`
                    w-10 h-10 rounded-full
                    ${selectedColor === color 
                      ? 'ring-2 ring-offset-2 ring-black' 
                      : ''}
                  `}
                />
              ))}
            </div>
          </div>
          
          {/* Quantity and Cart Actions */}
          <div className="flex space-x-4">
            <div className="flex items-center border border-[#9f9f9f] rounded-[10px]">
              <button 
                onClick={() => handleQuantityChange('decrease')}
                className="px-4 py-2 text-black"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('increase')}
                className="px-4 py-2 text-black"
              >
                +
              </button>
            </div>
            
            <button className="px-6 py-4 border border-black rounded-[15px] hover:bg-black hover:text-white transition-colors">
              Add To Cart
            </button>
            
            <button className="px-6 py-4 border border-black rounded-[15px] flex items-center space-x-2 hover:bg-black hover:text-white transition-colors">
              <FaHeart />
              <span>Compare</span>
            </button>
          </div>
          
          {/* Product Meta */}
          <div className="border-t pt-6 space-y-2">
            <div className="flex space-x-4">
              <span className="text-[#9f9f9f]">SKU:</span>
              <span>SS001</span>
            </div>
            <div className="flex space-x-4">
              <span className="text-[#9f9f9f]">Category:</span>
              <span>Sofas</span>
            </div>
            <div className="flex space-x-4">
              <span className="text-[#9f9f9f]">Tags:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
          </div>
          
          {/* Social Share */}
          <div className="flex items-center space-x-4">
            <span className="text-[#9f9f9f]">Share:</span>
            <div className="flex space-x-3">
              <FaFacebookF className="text-[#9f9f9f] hover:text-black cursor-pointer" />
              <FaLinkedinIn className="text-[#9f9f9f] hover:text-black cursor-pointer" />
              <FaTwitter className="text-[#9f9f9f] hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single