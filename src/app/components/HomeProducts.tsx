'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// Define the Product interface with explicit tag type
interface Product {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  tag?: 'new' | 'discount' | 'hover';
}

// Update the products array to match the interface exactly
const products: Product[] = [
    {
      id: 1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      originalPrice: 3500000,
      currentPrice: 2500000,
      discount: 30,
      image: '/assets/image1.png',
      tag: 'discount'
    },
    {
      id: 2,
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      currentPrice: 2500000,
      image: '/assets/product2.png',
      tag: 'hover'
    },
    {
      id: 3,
      name: 'Lolito',
      description: 'Luxury big sofa',
      originalPrice: 14000000,
      currentPrice: 7000000,
      discount: 50,
      image: '/assets/image2.png',
      tag: 'discount'
    },
    {
      id: 4,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      currentPrice: 500000,
      image: '/assets/image3.png',
      tag: 'new'
    },
    {
      id: 5,
      name: 'Grifo',
      description: 'Night lamp',
      currentPrice: 1500000,
      image: '/assets/image6.png'
    },
    {
      id: 6,
      name: 'Muggo',
      description: 'Small mug',
      currentPrice: 150000,
      image: '/assets/image5.png',
      tag: 'new'
    },
    {
      id: 7,
      name: 'Pingky',
      description: 'Cute bed set',
      originalPrice: 14000000,
      currentPrice: 7000000,
      discount: 50,
      image: '/assets/image 7.png',
      tag: 'discount'
    },
    {
      id: 8,
      name: 'Potty',
      description: 'Minimalist flower pot',
      currentPrice: 500000,
      image: '/assets/image8.png',
      tag: 'new'
    }
  ]

// Rest of the code remains the same...
  

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderTag = () => {
    switch(product.tag) {
      case 'discount':
        return (
          <div className="absolute top-4 right-4 bg-[#e97171] text-white rounded-full w-12 h-12 flex items-center justify-center">
            -{product.discount}%
          </div>
        )
      case 'new':
        return (
          <div className="absolute top-4 right-4 bg-[#2ec1ac] text-white rounded-full w-12 h-12 flex items-center justify-center">
            New
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div 
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative w-full h-[301px]">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Product Tag */}
      {renderTag()}

      {/* Hover Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-4">
          <button className="bg-white text-[#b88e2f] px-8 py-3 rounded">
            Add to cart
          </button>
          <div className="flex space-x-4 text-white">
            <span>Share</span>
            <span>Compare</span>
            <span>Like</span>
          </div>
        </div>
      )}

      {/* Product Details */}
      <div className="bg-[#f4f5f7] p-4">
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="text-[#898989]">{product.description}</p>
        <div className="flex items-center space-x-4 mt-2">
          <span className="text-xl font-semibold">
            Rp {product.currentPrice.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-[#b0b0b0] line-through">
              Rp {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

const HomeProducts: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(4)

  const handleShowMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, products.length))
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-center text-4xl font-bold mb-12">Our Products</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.slice(0, visibleProducts).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="text-center mt-12">
          <button 
            onClick={handleShowMore}
            className="border border-[#b88e2f] text-[#b88e2f] px-8 py-3 rounded hover:bg-[#b88e2f] hover:text-white transition-colors"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  )
}

export default HomeProducts