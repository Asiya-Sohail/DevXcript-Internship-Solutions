import '../index.css'
import Logo from '../assets/logo.png'

function Nav() {
  return (
    <nav className='w-full bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center gap-2'>
            <img 
              className='w-10 h-10 object-contain'
              src={Logo}
              alt="Nexent Logo"
            />
            <h1 className='text-xl sm:text-2xl font-bold text-gray-900'>Nexent</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6'>
            <a href="#home" className='text-gray-700 hover:text-[#4CAF4F] font-medium transition-colors'>Home</a>
            <a href="#feature" className='text-gray-700 hover:text-[#4CAF4F] font-medium transition-colors'>Features</a>
            <a href="#services" className='text-gray-700 hover:text-[#4CAF4F] font-medium transition-colors'>Community</a>
            <a href="#faq" className='text-gray-700 hover:text-[#4CAF4F] font-medium transition-colors'>Blog</a>
            <a href="#pricing" className='text-gray-700 hover:text-[#4CAF4F] font-medium transition-colors'>Pricing</a>
          </div>

          <div className='hidden md:flex space-x-4'>
            <button className='bg-white text-[#4CAF4F] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-base sm:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#4CAF4F]'>Login</button>
            <button className='bg-[#4CAF4F] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#3a8a3d] transition-colors text-base sm:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1'>Sign Up</button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button className='text-gray-700 hover:text-[#4CAF4F] p-2'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav