import React from 'react'
import { 
  FaTruck, 
  FaShieldAlt, 
  FaGift, 
  FaHeadset 
} from 'react-icons/fa'

const ShopShipping = () => {
  const shippingFeatures = [
    {
      icon: FaTruck,
      title: "High Quality",
      description: "crafted from top materials",
      iconBgColor: "bg-[#fde5d5]",
      iconColor: "text-[#b88e2f]"
    },
    {
      icon: FaShieldAlt,
      title: "Warranty Protection",
      description: "Over 2 years",
      iconBgColor: "bg-[#d6f4f4]",
      iconColor: "text-[#2ec1ac]"
    },
    {
      icon: FaGift,
      title: "Free Shipping",
      description: "Order over 150 $",
      iconBgColor: "bg-[#e5f4f3]",
      iconColor: "text-[#82a99e]"
    },
    {
      icon: FaHeadset,
      title: "24 / 7 Support",
      description: "Dedicated support",
      iconBgColor: "bg-[#f3e9db]",
      iconColor: "text-[#b88e2f]"
    }
  ]

  return (
    <div className="w-full bg-[#faf3ea] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-between">
          {shippingFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-6 group hover:bg-white hover:shadow-md transition-all duration-300 p-6 rounded-lg"
            >
              {/* Icon Container */}
              <div className={`
                w-20 h-20 rounded-full flex items-center justify-center 
                ${feature.iconBgColor} group-hover:scale-105 transition-transform
                shadow-md
              `}>
                <feature.icon 
                  className={`w-10 h-10 ${feature.iconColor}`} 
                />
              </div>
              
              {/* Text Container */}
              <div>
                <h3 className="text-[#242424] text-2xl font-semibold font-['Poppins'] leading-tight mb-1">
                  {feature.title}
                </h3>
                <p className="text-[#898989] text-base font-medium font-['Poppins']">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopShipping