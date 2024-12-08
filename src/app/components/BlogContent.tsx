
"use client"
import React, { useState } from 'react'
import { FaUser, FaCalendar, FaTag } from 'react-icons/fa'

const BlogContent = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const blogPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "assets/Rectangle 67.png",
      author: "Admin",
      category: "Wood",
      date: "14 Oct 2022"
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "assets/Rectangle 68.png",
      author: "Admin",
      category: "Handmade",
      date: "14 Oct 2022"
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      image: "assets/Rectangle 69.png",
      author: "Admin",
      category: "Wood",
      date: "14 Oct 2022"
    }
  ]

  const recentPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      image: "/assets/recent1.png",
      date: "03 Aug 2022"
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      image: "/assets/recent2.png",
      date: "03 Aug 2022"
    },
    {
        id: 3,
        title: "Handmade pieces that took time to make",
        image: "/assets/recent3.png",
        date: "03 Aug 2022"
      },
      {
        id: 4,
        title: "Modern home in Milan",
        image: "/assets/recent4.png",
        date: "03 Aug 2022"
      },
      {
        id: 5,
        title: "Colorful office redesign",
        image: "/assets/recent5.png",
        date: "03 Aug 2022"
      },
    // Add more recent posts
  ]

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col-reverse md:flex-row gap-8">
        {/* Main Blog Content */}
        <div className="w-full md:w-2/3 space-y-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-[500px] object-cover rounded-lg mb-6"
              />
              
              <div className="post-meta flex items-center space-x-4 mb-4 text-[#9f9f9f]">
                <div className="flex items-center space-x-2">
                  <FaUser />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendar />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaTag />
                  <span>{post.category}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium text-black mb-4">
                {post.title}
              </h2>
              
              <p className="text-[#9f9f9f] mb-6">
                {post.excerpt}
              </p>
              
              <button className="group flex items-center text-black font-medium">
                Read more
                <span className="block h-[1px] w-0 group-hover:w-full bg-black transition-all duration-300 ml-2"></span>
              </button>
            </div>
          ))}
          
          {/* Pagination */}
          <div className="flex justify-center space-x-4 mt-12">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-16 h-16 rounded-lg ${
                  currentPage === page 
                    ? 'bg-[#b88e2f] text-white' 
                    : 'bg-[#f9f1e7] text-black'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-24 h-16 bg-[#f9f1e7] rounded-lg">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 space-y-8">
          {/* Search */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-[#9f9f9f] rounded-lg"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              🔍
            </button>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Categories</h3>
            <div className="space-y-4">
              {categories.map((category) => (
                <div 
                  key={category.name} 
                  className="flex justify-between text-[#9f9f9f]"
                >
                  <span>{category.name}</span>
                  <span>({category.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Recent Posts</h3>
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center mb-4 space-x-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-sm font-normal">{post.title}</h4>
                  <p className="text-xs text-[#9f9f9f]">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent