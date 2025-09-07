import React from 'react';

const Nav = () => {
  return (
    <nav className=" container mx-auto px-6 pb-4 pt-8 flex justify-between items-center font-semibold">
      <div className="flex items-center">
        <h1 className="font-bold text-3xl"><span className='text-black'>E-</span><span className='text-blue-600'>sheba</span></h1>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
        <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Application</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">History</a>
      </div>
      
      <div className="hidden md:flex items-center space-x-4 bg-transparent">
        <button className="text-blue-600 hover:text-blue-800 px-4 py-2 rounded-full transition-colors border-2 border-solid  border-blue-600">Log in</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full  hover:bg-blue-700 transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Nav;