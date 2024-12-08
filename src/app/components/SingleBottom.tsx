'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const SingleBottom = () => {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews [5]' }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex justify-center space-x-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              text-2xl font-medium transition-colors duration-300
              ${activeTab === tab.id 
                ? 'text-black' 
                : 'text-[#9f9f9f] hover:text-black'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-[1026px] mx-auto mb-12">
        <p className="text-[#9f9f9f] text-base text-justify mb-4">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-[#9f9f9f] text-base text-justify">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid md:grid-cols-2 gap-8 max-w-[1239px] mx-auto">
        <div className="bg-[#f9f1e7] rounded-[10px] overflow-hidden">
          <Image 
            src="/assets/sofae.png" 
            alt="Product Detail 1" 
            width={605}
            height={348}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#f9f1e7] rounded-[10px] overflow-hidden">
          <Image 
            src="/assets/sofae1.png" 
            alt="Product Detail 2" 
            width={605}
            height={348}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default SingleBottom