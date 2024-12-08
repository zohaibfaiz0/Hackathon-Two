import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

const SingleTop = ({ title = "Asgaard sofa" }) => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: title, path: '#' }
  ]

  return (
    <div className="bg-[#f9f1e7] py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start space-x-2">
          {breadcrumbs.map((item, index) => (
            <div 
              key={item.path} 
              className="flex items-center space-x-2"
            >
              {index > 0 && (
                <FaChevronRight 
                  className="text-[#9f9f9f] text-sm" 
                />
              )}
              <Link 
                href={item.path} 
                className={`
                  text-base font-normal font-['Poppins']
                  ${index === breadcrumbs.length - 1 
                    ? 'text-black' 
                    : 'text-[#9f9f9f] hover:text-black transition-colors'}
                `}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        
        {/* Page Title */}
        <div className="mt-4 flex items-center">
          <div className="h-8 w-1 bg-[#9f9f9f] mr-4"></div>
          <h1 className="text-2xl md:text-3xl font-semibold text-black font-['Poppins']">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SingleTop