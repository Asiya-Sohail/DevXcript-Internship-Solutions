import '../index.css'

function Feature() {
  return (
    <section id="feature" className='w-full py-16 sm:py-20 lg:py-24 bg-white'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          
          {/* Top Section - Illustration and Text */}
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 sm:mb-20 lg:mb-24'>
            
            {/* Left Side - Illustration */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
              <div className='relative w-full max-w-md lg:max-w-lg'>
                {/* Mobile Phone */}
                <div className='relative w-64 h-96 sm:w-72 sm:h-[28rem] lg:w-80 lg:h-[32rem] bg-gray-200 rounded-3xl mx-auto'>
                  {/* Phone Screen */}
                  <div className='absolute inset-4 bg-white rounded-2xl shadow-lg'>
                    {/* Profile Icon */}
                    <div className='flex justify-center pt-8 pb-4'>
                      <div className='w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center'>
                        <div className='w-8 h-8 bg-gray-500 rounded-full'></div>
                      </div>
                    </div>
                    
                    {/* Input Fields */}
                    <div className='px-6 space-y-4'>
                      <div className='h-12 bg-gray-100 rounded-lg flex items-center px-4'>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                      </div>
                      <div className='h-12 bg-gray-100 rounded-lg flex items-center px-4'>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                        <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-[#4CAF4F] rounded-full flex items-center justify-center'>
                  <div className='w-4 h-4 bg-white rounded-sm'></div>
                </div>
                <div className='absolute top-1/4 -left-4 w-8 h-8 bg-[#4CAF4F] rounded-full flex items-center justify-center'>
                  <div className='w-4 h-4 bg-white rounded-full'></div>
                </div>
                <div className='absolute bottom-1/4 -right-4 w-8 h-8 bg-[#4CAF4F] rounded-full flex items-center justify-center'>
                  <div className='w-4 h-4 bg-white transform rotate-45'></div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Text Content */}
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight'>
                The unseen of spending three years at Pixelgrade
              </h2>
              <p className='text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className='bg-[#4CAF4F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#3a8a3d] transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                Learn More
              </button>
            </div>
          </div>

          {/* Bottom Section - Statistics */}
          <div className='bg-gray-50 rounded-2xl p-8 sm:p-12 lg:p-16'>
            <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
              
              {/* Left Side - Marketing Text */}
              <div className='w-full lg:w-1/2 text-center lg:text-left'>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6'>
                  Helping a local <span className='text-[#4CAF4F]'>business</span> reinvent itself
                </h3>
                <p className='text-gray-600 text-base sm:text-lg'>
                  We reached here with our hard work and dedication
                </p>
              </div>
              
              {/* Right Side - Statistics Grid */}
              <div className='w-full lg:w-1/2'>
                <div className='grid grid-cols-2 gap-6 sm:gap-8'>
                  
                  {/* Members */}
                  <div className='text-center'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#4CAF4F] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                      <div className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'>
                        <div className='w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full'></div>
                        <div className='w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full -ml-2'></div>
                      </div>
                    </div>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2'>2,245,341</div>
                    <div className='text-sm sm:text-base text-gray-600'>Members</div>
                  </div>
                  
                  {/* Clubs */}
                  <div className='text-center'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#4CAF4F] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                      <div className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'>
                        <div className='w-4 h-2 sm:w-5 sm:h-3 bg-white rounded-full'></div>
                        <div className='w-2 h-4 sm:w-3 sm:h-5 bg-white rounded-full -ml-1'></div>
                      </div>
                    </div>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2'>46,328</div>
                    <div className='text-sm sm:text-base text-gray-600'>Clubs</div>
                  </div>
                  
                  {/* Event Bookings */}
                  <div className='text-center'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#4CAF4F] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                      <div className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'>
                        <div className='w-3 h-4 sm:w-4 sm:h-5 bg-white rounded-t-full'></div>
                        <div className='w-1 h-2 sm:w-2 sm:h-3 bg-white rounded-full -ml-1'></div>
                      </div>
                    </div>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2'>828,867</div>
                    <div className='text-sm sm:text-base text-gray-600'>Event Bookings</div>
                  </div>
                  
                  {/* Payments */}
                  <div className='text-center'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#4CAF4F] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                      <div className='w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'>
                        <div className='w-4 h-3 sm:w-5 sm:h-4 bg-white rounded'></div>
                        <div className='w-2 h-1 sm:w-3 sm:h-1 bg-white rounded -mt-1'></div>
                      </div>
                    </div>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2'>1,926,436</div>
                    <div className='text-sm sm:text-base text-gray-600'>Payments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
