import '../index.css'

function Services() {
  return (
    <section id="services" className='w-full py-16 sm:py-20 lg:py-24 bg-white'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          
          {/* Our Clients Section */}
          <div className='text-center mb-16 sm:mb-20 lg:mb-24'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6'>
              Our Clients
            </h2>
            <p className='text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-8 sm:mb-12'>
              We have been working with some Fortune 500+ clients
            </p>
            
            {/* Client Logos */}
            <div className='flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16'>
              {/* Logo 1 - Four interconnected squares */}
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-lg flex items-center justify-center'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 grid grid-cols-2 gap-1'>
                  <div className='bg-white rounded-sm'></div>
                  <div className='bg-white rounded-sm'></div>
                  <div className='bg-white rounded-sm'></div>
                  <div className='bg-white rounded-sm'></div>
                </div>
              </div>
              
              {/* Logo 2 - Stylized eye */}
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-full flex items-center justify-center'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full'></div>
              </div>
              
              {/* Logo 3 - Geometric 03 */}
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-lg flex items-center justify-center'>
                <div className='text-white font-bold text-lg sm:text-xl'>03</div>
              </div>
              
              {/* Logo 4 - LOGO! IPSUM */}
              <div className='w-20 h-16 sm:w-24 sm:h-20 bg-gray-800 rounded-lg flex items-center justify-center px-2'>
                <div className='text-white font-bold text-xs sm:text-sm text-center'>LOGO!<br/>IPSUM</div>
              </div>
              
              {/* Logo 5 - Concentric waves */}
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-full flex items-center justify-center'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full'></div>
              </div>
              
              {/* Logo 6 - Three interconnected C shapes */}
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-lg flex items-center justify-center'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center'>
                  <div className='w-2 h-6 bg-white rounded-full'></div>
                  <div className='w-2 h-6 bg-white rounded-full mx-1'></div>
                  <div className='w-2 h-6 bg-white rounded-full'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6'>
              Manage your entire community in a single system
            </h2>
            <p className='text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto'>
              Who is Nextcent suitable for?
            </p>
          </div>
          
          {/* Service Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
            
            {/* Membership Organisations Card */}
            <div className='bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center'>
                  {/* Three stylized people icon */}
                  <div className='flex items-end space-x-1'>
                    <div className='w-2 h-4 bg-[#4CAF4F] rounded-full'></div>
                    <div className='w-2 h-5 bg-[#4CAF4F] rounded-full'></div>
                    <div className='w-2 h-3 bg-[#4CAF4F] rounded-full'></div>
                  </div>
                </div>
              </div>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3'>
                Membership Organisations
              </h3>
              <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
            
            {/* National Associations Card */}
            <div className='bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center'>
                  {/* Multi-story building icon */}
                  <div className='w-8 h-8 sm:w-10 sm:h-10 relative'>
                    <div className='absolute bottom-0 left-0 w-full h-3 bg-[#4CAF4F] rounded-sm'></div>
                    <div className='absolute bottom-3 left-1 w-1 h-2 bg-[#4CAF4F] rounded-sm'></div>
                    <div className='absolute bottom-3 right-1 w-1 h-2 bg-[#4CAF4F] rounded-sm'></div>
                    <div className='absolute bottom-5 left-0 w-full h-3 bg-[#4CAF4F] rounded-sm'></div>
                    <div className='absolute bottom-8 left-1 w-1 h-2 bg-[#4CAF4F] rounded-sm'></div>
                    <div className='absolute bottom-8 right-1 w-1 h-2 bg-[#4CAF4F] rounded-sm'></div>
                  </div>
                </div>
              </div>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3'>
                National Associations
              </h3>
              <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
            
            {/* Clubs And Groups Card */}
            <div className='bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center md:col-span-2 lg:col-span-1'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center'>
                  {/* Three interconnected circles icon */}
                  <div className='relative w-8 h-8 sm:w-10 sm:h-10'>
                    <div className='absolute top-0 left-0 w-4 h-4 border-2 border-[#4CAF4F] rounded-full'></div>
                    <div className='absolute top-0 right-0 w-4 h-4 border-2 border-[#4CAF4F] rounded-full'></div>
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-[#4CAF4F] rounded-full'></div>
                  </div>
                </div>
              </div>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3'>
                Clubs And Groups
              </h3>
              <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
