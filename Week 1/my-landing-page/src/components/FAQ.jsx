import '../index.css'

function FAQ() {
  return (
    <section id="faq" className='w-full py-16 sm:py-20 lg:py-24 bg-white'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          
          {/* Blog Section */}
          <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6'>
              Caring is the new marketing
            </h2>
            <p className='text-gray-600 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed'>
              The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
            </p>
          </div>
          
          {/* Blog Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24'>
            
            {/* Blog Card 1 */}
            <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
              <div className='relative'>
                {/* Blog Image */}
                <div className='w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center'>
                  <div className='w-32 h-32 bg-gradient-to-br from-blue-200 to-green-200 rounded-full flex items-center justify-center'>
                    <div className='w-16 h-16 bg-gradient-to-br from-blue-300 to-green-300 rounded-full'></div>
                  </div>
                </div>
                
                {/* Overlay Text Box */}
                <div className='absolute bottom-0 left-4 right-4 bg-white rounded-lg shadow-lg p-4 sm:p-6 transform translate-y-1/2'>
                  <h3 className='text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight'>
                    Creating Streamlined Safeguarding Processes with OneRen
                  </h3>
                  <a href="#" className='text-[#4CAF4F] font-medium text-sm sm:text-base hover:text-[#3a8a3d] transition-colors'>
                    Readmore →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Blog Card 2 */}
            <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
              <div className='relative'>
                {/* Blog Image */}
                <div className='w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center'>
                  <div className='w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center'>
                    <div className='w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg'></div>
                  </div>
                </div>
                
                {/* Overlay Text Box */}
                <div className='absolute bottom-0 left-4 right-4 bg-white rounded-lg shadow-lg p-4 sm:p-6 transform translate-y-1/2'>
                  <h3 className='text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight'>
                    What are your safeguarding responsibilities and how can you manage them?
                  </h3>
                  <a href="#" className='text-[#4CAF4F] font-medium text-sm sm:text-base hover:text-[#3a8a3d] transition-colors'>
                    Readmore →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Blog Card 3 */}
            <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden md:col-span-2 lg:col-span-1'>
              <div className='relative'>
                {/* Blog Image */}
                <div className='w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center'>
                  <div className='w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex items-center justify-center'>
                    <div className='w-16 h-16 bg-gradient-to-br from-green-300 to-blue-300 rounded-lg'></div>
                  </div>
                </div>
                
                {/* Overlay Text Box */}
                <div className='absolute bottom-0 left-4 right-4 bg-white rounded-lg shadow-lg p-4 sm:p-6 transform translate-y-1/2'>
                  <h3 className='text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight'>
                    Revamping the Membership Model with Triathlon Australia
                  </h3>
                  <a href="#" className='text-[#4CAF4F] font-medium text-sm sm:text-base hover:text-[#3a8a3d] transition-colors'>
                    Readmore →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className='text-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8'>
              Pellentesque suscipit fringilla libero eu.
            </h2>
            <button className='bg-[#4CAF4F] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-semibold hover:bg-[#3a8a3d] transition-colors text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
              Get a Demo →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
