import React from 'react';
import doctorImage from '../assets/doctor-image.png'; // Add your own image

const Hero = () => {
  return (
    <>
      <div id="home" className="w-full container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 md:leading-18">
              Find & Search Your <span className="text-blue-600">Favourite</span> Doctor          
            </h2>
            <p className="text-gray-600 mb-8 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Sem velit viverra amet faucibus.
            </p>
          </div>
          
          <div className=" md:w-[90%] p-2 bg-white flex flex-col justify-around sm:flex-row gap-4 mb-12 border border-gray-300 rounded-lg md:rounded-full ">
            <div className="relative flex gap-2 items-center justify-center">
            <i class="ri-user-2-line"></i>
              <input 
                type="text" 
                placeholder="Doctor's Name" 
                className="w-full md:rounded-full focus:outline-none"
              />
            </div>

            <div className="relative flex gap-2 items-center justify-center">
            <i class="ri-map-pin-line"></i>
              <input 
                type="text" 
                placeholder="Location" 
                className="w-full md:rounded-full focus:outline-none"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 text-md rounded-full hover:bg-blue-700 transition-colors">
              <i class="ri-search-line"></i>
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-end z-10 md:-mb-24">
          <img 
            src={doctorImage} 
            alt="Doctor" 
            className="max-w-full md:w-lg h-auto"
          />
        </div>
      </div>
      <div className='w-full bg-blue-600 p-4 z-0'>
          <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center md:border-r-1 md:border-solid md:border-white">
              <h3 className="text-3xl md:text-5xl font-bold  text-white mb-2">24/7</h3>
              <p className="text-gray-100 text-xs">Online Support</p>
            </div>
            <div className="text-center md:border-r-1 md:border-solid md:border-white">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">100+</h3>
              <p className="text-gray-100 text-xs">Doctors</p>
            </div>
            <div className="text-center ">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">1M+</h3>
              <p className="text-gray-100 text-xs">Active Patients</p>
            </div>
          </div>
        </div>
      </>
  );
};

export default Hero;