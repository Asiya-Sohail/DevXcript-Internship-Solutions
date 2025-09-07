import '../index.css'

function Pricing() {
  return (
    <section id="pricing" className='w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-100 to-gray-200'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6'>
              The Price of Doing Things
            </h2>
            <p className='text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto'>
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
            <div className='bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center'>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4'>Building a Brand</h3>
              <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2'>£24.97</p>
              <p className='text-gray-600 mb-6 text-sm sm:text-base'>Perfect for startups and small businesses</p>
              <ul className='text-left mb-8 space-y-2 text-sm sm:text-base text-gray-600'>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Basic community tools</li>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Email support</li>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Analytics dashboard</li>
              </ul>
              <button className='w-full bg-[#4CAF4F] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:bg-[#3a8a3d] transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl'>
                Choose Plan
              </button>
            </div>
            
            <div className='bg-white p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 text-center border-2 border-[#4CAF4F] relative'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#4CAF4F] text-white px-4 py-2 rounded-full text-sm font-semibold'>
                Most Popular
              </div>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4'>Marketing a Brand</h3>
              <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2'>£49.97</p>
              <p className='text-gray-600 mb-6 text-sm sm:text-base'>Ideal for growing businesses</p>
              <ul className='text-left mb-8 space-y-2 text-sm sm:text-base text-gray-600'>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Everything in Basic</li>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Advanced marketing tools</li>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Priority support</li>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Custom integrations</li>
              </ul>
              <button className='w-full bg-[#4CAF4F] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:bg-[#3a8a3d] transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl'>
                Choose Plan
              </button>
            </div>
            
            <div className='bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center md:col-span-2 lg:col-span-1'>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4'>Building a Movement</h3>
              <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2'>£99.97</p>
              <p className='text-gray-600 mb-6 text-sm sm:text-base'>For established brands ready to scale</p>
              <ul className='text-left mb-8 space-y-2 text-sm sm:text-base text-gray-600'>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Everything in Pro</li>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Enterprise features</li>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Dedicated manager</li>
                <li className='flex items-center'><span className='text-[#4CAF4F] mr-2'>✓</span> Custom development</li>
              </ul>
              <button className='w-full bg-[#4CAF4F] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:bg-[#3a8a3d] transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl'>
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
