import '../index.css'
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='w-full bg-gray-800 text-white py-12 sm:py-16 lg:py-20'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12'>
            
            {/* Column 1: Company Information and Social Media */}
            <div className='text-center sm:text-left'>
              <div className='flex items-center justify-center sm:justify-start mb-4 sm:mb-6'>
                <img 
                  className='w-8 h-8 object-contain mr-3'
                  src={Logo}
                  alt="Nexcent Logo"
                />
                <h3 className='text-xl sm:text-2xl font-bold'>Nexcent</h3>
              </div>
              <p className='text-gray-300 text-sm sm:text-base mb-2'>Copyright © 2020 Nexcent ltd.</p>
              <p className='text-gray-300 text-sm sm:text-base mb-6'>All rights reserved</p>
              
              {/* Social Media Icons */}
              <div className='flex justify-center sm:justify-start space-x-4'>
                {/* Instagram Icon */}
                <a href="#" className='w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-[#4CAF4F] hover:border-[#4CAF4F] transition-colors'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                  </svg>
                </a>
                
                {/* Globe/Website Icon */}
                <a href="#" className='w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-[#4CAF4F] hover:border-[#4CAF4F] transition-colors'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/>
                  </svg>
                </a>
                
                {/* Twitter Icon */}
                <a href="#" className='w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-[#4CAF4F] hover:border-[#4CAF4F] transition-colors'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
                  </svg>
                </a>
                
                {/* YouTube Icon */}
                <a href="#" className='w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-[#4CAF4F] hover:border-[#4CAF4F] transition-colors'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Column 2: Company Links */}
            <div className='text-center sm:text-left'>
              <h4 className='font-semibold mb-4 sm:mb-6 text-lg'>Company</h4>
              <ul className='space-y-2 sm:space-y-3 text-gray-300'>
                <li><a href="#about" className='hover:text-white transition-colors text-sm sm:text-base'>About us</a></li>
                <li><a href="#blog" className='hover:text-white transition-colors text-sm sm:text-base'>Blog</a></li>
                <li><a href="#contact" className='hover:text-white transition-colors text-sm sm:text-base'>Contact us</a></li>
                <li><a href="#pricing" className='hover:text-white transition-colors text-sm sm:text-base'>Pricing</a></li>
                <li><a href="#testimonials" className='hover:text-white transition-colors text-sm sm:text-base'>Testimonials</a></li>
              </ul>
            </div>
            
            {/* Column 3: Support Links */}
            <div className='text-center sm:text-left'>
              <h4 className='font-semibold mb-4 sm:mb-6 text-lg'>Support</h4>
              <ul className='space-y-2 sm:space-y-3 text-gray-300'>
                <li><a href="#help" className='hover:text-white transition-colors text-sm sm:text-base'>Help center</a></li>
                <li><a href="#terms" className='hover:text-white transition-colors text-sm sm:text-base'>Terms of service</a></li>
                <li><a href="#legal" className='hover:text-white transition-colors text-sm sm:text-base'>Legal</a></li>
                <li><a href="#privacy" className='hover:text-white transition-colors text-sm sm:text-base'>Privacy policy</a></li>
                <li><a href="#status" className='hover:text-white transition-colors text-sm sm:text-base'>Status</a></li>
              </ul>
            </div>
            
            {/* Column 4: Stay Up to Date */}
            <div className='text-center sm:text-left'>
              <h4 className='font-semibold mb-4 sm:mb-6 text-lg'>Stay up to date</h4>
              <div className='relative'>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className='w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 pr-12 rounded-lg border border-gray-600 focus:border-[#4CAF4F] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] transition-colors'
                />
                <button className='absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#4CAF4F] rounded-lg flex items-center justify-center hover:bg-[#3a8a3d] transition-colors'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer