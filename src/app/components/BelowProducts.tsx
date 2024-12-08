'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// Define types for room data
interface RoomData {
  id: number;
  title: string;
  category: string;
  image: string;
}

const roomData: RoomData[] = [
  {
    id: 1,
    title: 'Inner Peace',
    category: 'Bed Room',
    image: '/assets/rectangle 24.png'
  },
  {
    id: 2,
    title: 'Cozy Corner',
    category: 'Living Room',
    image: '/assets/rectangle 25.png'
  },
  {
    id: 3,
    title: 'Minimalist Space',
    category: 'Study Room',
    image: '/assets/rectangle 26.png'
  }
]

const BelowProducts: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleSlideChange = (index: number) => {
    setActiveSlide(index)
  }

  return (
    <section className="bg-[#fbf7f2] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h2 className="text-4xl font-bold text-[#3a3a3a] mb-6">
            50+ Beautiful rooms <br />inspiration
          </h2>
          <p className="text-[#606060] mb-8">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button className="bg-[#b88e2f] text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors">
            Explore More
          </button>
        </div>

        {/* Right Slider */}
        <div className="w-full md:w-1/2 relative">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeSlide * 100}%)`,
                width: `${roomData.length * 100}%`
              }}
            >
              {roomData.map((room) => (
                <div
                  key={room.id}
                  className="w-full flex-shrink-0 relative"
                >
                  <div className="relative group">
                    <div className="w-[404px] h-[582px] relative">
                      <Image
                        src={room.image}
                        alt={room.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 404px"
                        className="object-cover"
                        priority={room.id === 1}
                      />
                    </div>

                    {/* Room Info Overlay */}
                    <div className="absolute bottom-8 left-4 w-[217px]">
                      <div className="bg-white/70 backdrop-blur-sm p-4 rounded">
                        <div className="flex items-center gap-2 mb-2 text-[#606060]">
                          <span>0{room.id}</span>
                          <span>{room.category}</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-[#3a3a3a]">
                          {room.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {roomData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeSlide === index
                      ? 'bg-[#b88e2f]'
                      : 'bg-[#d8d8d8]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BelowProducts