import React from 'react'
import Image from 'next/image'
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa'

const Related = () => {
  const relatedProducts = [
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/assets/product1.png',
      discount: 30
    },
    {
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 2500000,
      image: '/assets/product2.png'
    },
    {
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/assets/product3.png',
      discount: 50
    },
    {
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 500000,
      image: '/assets/product4.png',
      tag: 'New'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-medium text-center mb-12">Related Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {relatedProducts.map((product, index) => (
          <div key={index} className="relative group w-full max-w-[285px] bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <div className="relative h-[301px]">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                <button className="bg-white p-3 rounded-full hover:bg-[#b88e2f] hover:text-white transition-colors">
                  <FaShoppingCart />
                </button>
                <button className="bg-white p-3 rounded-full hover:bg-[#b88e2f] hover:text-white transition-colors">
                  <FaHeart />
                </button>
                <button className="bg-white p-3 rounded-full hover:bg-[#b88e2f] hover:text-white transition-colors">
                  <FaSearch />
                </button>
              </div>

              {/* Discount/New Tag */}
              {(product.discount || product.tag) && (
                <div className="absolute top-4 right-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${product.discount ? 'bg-[#e97171]' : 'bg-[#2ec1ac]'}
                  `}>
                    <span className="text-white font-medium">
                      {product.discount ? `-${product.discount}%` : product.tag}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4 bg-[#f4f5f7]">
              <div className="mb-2">
                <h3 className="text-2xl font-semibold text-[#3a3a3a]">{product.name}</h3>
                <p className="text-base text-[#898989]">{product.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-semibold text-[#3a3a3a]">
                  Rp {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#b0b0b0] line-through">
                    Rp {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 border border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition-colors">
          Show More
        </button>
      </div>
    </div>
  )
}

export default Related