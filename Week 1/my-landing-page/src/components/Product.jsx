import '../index.css'

function Product() {
  return (
    <section id="product" className='w-full py-16 sm:py-20 lg:py-24 bg-white'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          
          {/* Top Section - Sign-up Form Illustration and Text */}
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 sm:mb-20 lg:mb-24'>
            
            {/* Left Side - Sign-up Form Illustration */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
              <div className='relative w-full max-w-md lg:max-w-lg'>
                {/* Mobile Phone with Sign-up Form */}
                <div className='relative w-64 h-96 sm:w-72 sm:h-[28rem] lg:w-80 lg:h-[32rem] bg-gray-200 rounded-3xl mx-auto'>
                  {/* Phone Screen */}
                  <div className='absolute inset-4 bg-white rounded-2xl shadow-lg'>
                    {/* Sign-up Form */}
                    <div className='p-6'>
                      <h3 className='text-lg font-bold text-gray-900 mb-6 text-center'>SIGN UP</h3>
                      
                      {/* Username Field */}
                      <div className='mb-4'>
                        <div className='flex items-center mb-2'>
                          <div className='w-4 h-4 bg-gray-300 rounded-full mr-2'></div>
                          <span className='text-sm text-gray-600'>Username</span>
                        </div>
                        <div className='h-10 bg-gray-100 rounded-lg flex items-center px-3'>
                          <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                          <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                          <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                          <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                          <div className='w-2 h-2 bg-gray-400 rounded-full mr-2'></div>
                          <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                        </div>
                      </div>
                      
                      {/* Password Field */}
                      <div className='mb-6'>
                        <div className='flex items-center mb-2'>
                          <div className='w-4 h-4 bg-gray-300 rounded-full mr-2'></div>
                          <span className='text-sm text-gray-600'>Password</span>
                        </div>
                        <div className='h-10 bg-gray-100 rounded-lg flex items-center px-3'>
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
                      
                      {/* Sign-up Button */}
                      <button className='w-full bg-[#4CAF4F] text-white py-3 rounded-lg font-semibold'>
                        SIGN UP
                      </button>
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
                How to design your site footer like we did
              </h2>
              <p className='text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed'>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
              </p>
              <button className='bg-[#4CAF4F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#3a8a3d] transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                Learn More
              </button>
            </div>
          </div>

          {/* Bottom Section - Client Testimonial */}
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
            
            {/* Left Side - Tesla Logo */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
              <div className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl flex items-center justify-center shadow-2xl'>
                <div className='text-white text-6xl sm:text-7xl lg:text-8xl font-bold'>T</div>
              </div>
            </div>
            
            {/* Right Side - Testimonial Content */}
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
              <p className='text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed'>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque viverra odio nisi at euismod. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
              </p>
              
              <div className='mb-6 sm:mb-8'>
                <div className='text-[#4CAF4F] font-semibold text-lg sm:text-xl mb-1'>Tim Smith</div>
                <div className='text-gray-600 text-sm sm:text-base'>British Dragon Boat Racing Association</div>
              </div>
              
              {/* Client Logos */}
              <div className='flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 mb-6 sm:mb-8'>
                {/* Logo 1 - Four interconnected squares */}
                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-purple-600 rounded-lg flex items-center justify-center'>
                  <div className='w-6 h-6 sm:w-7 sm:h-7 grid grid-cols-2 gap-1'>
                    <div className='bg-white rounded-sm'></div>
                    <div className='bg-white rounded-sm'></div>
                    <div className='bg-white rounded-sm'></div>
                    <div className='bg-white rounded-sm'></div>
                  </div>
                </div>
                
                {/* Logo 2 - Stylized eye */}
                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-full flex items-center justify-center'>
                  <div className='w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full'></div>
                </div>
                
                {/* Logo 3 - Geometric 03 */}
                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-lg flex items-center justify-center'>
                  <div className='text-white font-bold text-sm sm:text-base'>03</div>
                </div>
                
                {/* Logo 4 - LOGO! IPSUM */}
                <div className='w-16 h-12 sm:w-18 sm:h-14 bg-gray-800 rounded-lg flex items-center justify-center px-2'>
                  <div className='text-white font-bold text-xs sm:text-sm text-center'>LOGO!<br/>IPSUM</div>
                </div>
                
                {/* Logo 5 - Concentric waves */}
                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-full flex items-center justify-center'>
                  <div className='w-6 h-6 sm:w-7 sm:h-7 border-2 border-white rounded-full'></div>
                </div>
                
                {/* Logo 6 - Three interconnected C shapes */}
                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-lg flex items-center justify-center'>
                  <div className='w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center'>
                    <div className='w-1 h-4 bg-white rounded-full'></div>
                    <div className='w-1 h-4 bg-white rounded-full mx-1'></div>
                    <div className='w-1 h-4 bg-white rounded-full'></div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className='text-center lg:text-left'>
                <a href="#" className='text-[#4CAF4F] font-semibold text-base sm:text-lg hover:text-[#3a8a3d] transition-colors'>
                  Meet all customers →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
