'use client'
import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic
    console.log(formData)
  }

  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold font-['Poppins'] text-black mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-[#9f9f9f] max-w-2xl mx-auto text-base font-normal font-['Poppins']">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-medium font-['Poppins'] mb-4">Address</h3>
                <p className="text-base text-black font-['Poppins']">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium font-['Poppins'] mb-4">Phone</h3>
                <p className="text-base text-black font-['Poppins']">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium font-['Poppins'] mb-4">Working Time</h3>
                <p className="text-base text-black font-['Poppins']">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-base font-medium font-['Poppins'] text-black mb-2"
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Abc"
                  className="w-full px-4 py-3 border border-[#9f9f9f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b88e2f]"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-base font-medium font-['Poppins'] text-black mb-2"
                >
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Abc@def.com"
                  className="w-full px-4 py-3 border border-[#9f9f9f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b88e2f]"
                />
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-base font-medium font-['Poppins'] text-black mb-2"
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="This is an optional"
                  className="w-full px-4 py-3 border border-[#9f9f9f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b88e2f]"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-base font-medium font-['Poppins'] text-black mb-2"
                >
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi! i'd like to ask about"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#9f9f9f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b88e2f]"
                />
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-[#b88e2f] text-white rounded-lg hover:bg-[#9f7a27] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm