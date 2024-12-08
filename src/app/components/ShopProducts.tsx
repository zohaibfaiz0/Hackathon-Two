import React from 'react'

const ShopProducts = () => {
  // Sample product data (you can replace with actual data)
  
    const products = [
        {
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: 2500000,
          originalPrice: 3500000,
          discount: 30,
          image: "/assets/product1.png"
        },
        {
          name: "Leviosa",
          description: "Stylish cafe chair",
          price: 2500000,
          originalPrice: null,
          discount: null,
          image: "/assets/product2.png"
        },
        {
          name: "Lolito",
          description: "Luxury big sofa",
          price: 7000000,
          originalPrice: 14000000,
          discount: 50,
          image: "/assets/product3.png"
        },
        {
          name: "Respira",
          description: "Outdoor bar table and stool",
          price: 500000,
          originalPrice: null,
          discount: null,
          tag: "New",
          image: "/assets/product4.png"
        },
        {
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: 2500000,
            originalPrice: 3500000,
            discount: 30,
            image: "/assets/product1.png"
          },
          {
            name: "Leviosa",
            description: "Stylish cafe chair",
            price: 2500000,
            originalPrice: null,
            discount: null,
            image: "/assets/product2.png"
          },
          {
            name: "Lolito",
            description: "Luxury big sofa",
            price: 7000000,
            originalPrice: 14000000,
            discount: 50,
            image: "/assets/product3.png"
          },
          {
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: 500000,
            originalPrice: null,
            discount: null,
            tag: "New",
            image: "/assets/product4.png"
          },
          {
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: 2500000,
            originalPrice: 3500000,
            discount: 30,
            image: "/assets/product1.png"
          },
          {
            name: "Leviosa",
            description: "Stylish cafe chair",
            price: 2500000,
            originalPrice: null,
            discount: null,
            image: "/assets/product2.png"
          },
          {
            name: "Lolito",
            description: "Luxury big sofa",
            price: 7000000,
            originalPrice: 14000000,
            discount: 50,
            image: "/assets/product3.png"
          },
          {
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: 500000,
            originalPrice: null,
            discount: null,
            tag: "New",
            image: "/assets/product4.png"
          },
          {
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: 2500000,
            originalPrice: 3500000,
            discount: 30,
            image: "/assets/product1.png"
          },
          {
            name: "Leviosa",
            description: "Stylish cafe chair",
            price: 2500000,
            originalPrice: null,
            discount: null,
            image: "/assets/product2.png"
          },
          {
            name: "Lolito",
            description: "Luxury big sofa",
            price: 7000000,
            originalPrice: 14000000,
            discount: 50,
            image: "/assets/product3.png"
          },
          {
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: 500000,
            originalPrice: null,
            discount: null,
            tag: "New",
            image: "/assets/product4.png"
          },
             
        
      ]

  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="relative group transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[350px] object-cover"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-[#e97171] text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <span>-{product.discount}%</span>
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-[#b88e2f] px-6 py-3 rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4 text-center bg-[#f4f5f7]">
                <h3 className="text-2xl font-semibold text-[#3a3a3a]">
                  {product.name}
                </h3>
                <p className="text-[#898989] mb-2">
                  {product.description}
                </p>
                <div className="flex justify-center items-center gap-4">
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

        {/* Pagination */}
        <div className="flex justify-center space-x-4 mt-12">
          {[1, 2, 3].map((page) => (
            <button 
              key={page}
              className={`w-16 h-16 rounded-lg ${
                page === 1 
                  ? 'bg-[#b88e2f] text-white' 
                  : 'bg-[#f9f1e7] text-black'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-24 h-16 bg-[#f9f1e7] text-black rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopProducts