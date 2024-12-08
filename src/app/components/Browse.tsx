import React from 'react'
import Image from 'next/image'  // Assuming you're using Next.js, otherwise remove this import

const Browse = () => {
  const categories = [
    {
      name: 'Living',
      bgColor: 'bg-[#111111]',
      images: [
        '/assets/Mask Group.png'
      ]
    },
    {
      name: 'Dining',
      bgColor: 'bg-[#f2f5ff]',
      images: [
        '/assets/Image-living room.png'
      ]
    },
    {
      name: 'Bedroom',
      bgColor: 'bg-[#f4f4f4]',
      images: [
        '/assets/mask1.png'
      ]
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[32px] font-bold text-[#333333] mb-4">
          Browse The Range
        </h2>
        <p className="text-xl text-[#666666] max-w-[559px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-[10px]"
          >
            {/* Category Card */}
            <div 
              className={`h-[480px] ${category.bgColor} rounded-[10px] relative overflow-hidden`}
            >
              {/* Responsive Image Handling */}
              {category.images.map((img, imgIndex) => (
                <div 
                  key={imgIndex} 
                  className="absolute transition-transform duration-300 group-hover:scale-105"
                >
                  <Image
                    src={img}
                    alt={`${category.name} image ${imgIndex + 1}`}
                    width={400}
                    height={500}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Category Name */}
            <h3 className="text-center text-2xl font-semibold text-[#333333] mt-4">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Browse