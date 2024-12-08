import React from 'react'
import Image from 'next/image'

const BelowBelow = () => {
  return (
    <div className="w-full max-w-[1799px] mx-auto relative">
      {/* Header */}
      <div className="text-center py-6">
        <p className="text-xl text-[#606060] font-semibold font-['Poppins']">
          Share your setup with
        </p>
        <h2 className="text-[40px] text-[#3a3a3a] font-bold font-['Poppins']">
          #FuniroFurniture
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 px-4">
        {[
          { src: "/assets/Rectangle 36.png", alt: "Furniture Image 1", width: 274, height: 312 },
          { src: "/assets/Rectangle 38.png", alt: "Furniture Image 2", width: 451, height: 312 },
          { src: "/assets/Rectangle 40.png", alt: "Furniture Image 3", width: 295, height: 392 },
          { src: "/assets/Rectangle 43.png", alt: "Furniture Image 4", width: 344, height: 242 },
          { src: "/assets/Rectangle 45.png", alt: "Furniture Image 5", width: 178, height: 242 },
          { src: "/assets/Rectangle 37.png", alt: "Furniture Image 6", width: 258, height: 196 },
          { src: "/assets/Rectangle 39.png", alt: "Furniture Image 7", width: 290, height: 348 },
          { src: "/assets/Rectangle 41.png", alt: "Furniture Image 8", width: 425, height: 433 },
          { src: "/assets/Rectangle 44.png", alt: "Furniture Image 9", width: 381, height: 323 }
        ].map((image, index) => (
          <div 
            key={index} 
            className="relative flex items-center justify-center overflow-hidden"
            style={{ 
              height: '350px', // Fixed height to create some consistency
              width: '100%'
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BelowBelow;