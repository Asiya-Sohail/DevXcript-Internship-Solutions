import React from 'react';
import aboutDoctor from '../assets/about-doctor.png'
import covid19 from '../assets/covid-19.png'
import heartLungs from '../assets/heart-lungs.png'
import suppliment from '../assets/suppliment.png'
import mentalHealth from '../assets/mental-health.png'

const About = () => {
  return (
    <div id="about" className="w-full container mx-auto px-6 pt-24 ">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Consulting Specialists</h1>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {/* Covid-19 Test */}
        <div className="bg-white p-6 rounded-3xl flex-col justify-around border border-black">
          <img src={covid19} alt="Covid 19" className='p-3 w-14 bg-[#E6F5FC] rounded-full my-4'/>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Covid-19 Test</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
        </div>

        {/* Heart Lungs */}
        <div className="bg-white p-6 rounded-3xl flex-col justify-around border border-black">
          <img src={heartLungs} alt="Heart Lungs" className='p-3 w-14 bg-[#E6F5FC] rounded-full my-4'/>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Heart Lungs</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
        </div>
        
        {/* Suppliment */}
        <div className="bg-white p-6 rounded-3xl flex-col justify-around border border-black">
          <img src={suppliment} alt="Suppliment" className='p-3 w-14 bg-[#E6F5FC] rounded-full my-4'/>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Suppliment</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
        </div>

        {/* Mental Health */}
        <div className="bg-white p-6 rounded-3xl flex-col justify-around border border-black">
          <img src={mentalHealth} alt="Suppliment" className='p-3 w-14 bg-[#E6F5FC] rounded-full my-4'/>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Mental Health</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-t border-gray-300 my-16"></div>
      
      {/* Why Choose Us Section */}
      <div className="md:flex justify-between items-center">
              
        <div className="rounded-lg md:max-w-[55%] mb-4  object-contain">
              <img 
                  alt="Doctor" 
                  src={aboutDoctor} 
                  className="max-w-full"
              /> 
        </div>

        {/* Right Column */}
        <div className='md:w-[42%]'>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why You Choose Us?</h2>
          
          {/* Checkmark List */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </li>
          </ul>
          
          {/* Learn More Button */}
          <a href="#" className="inline-flex items-center mt-8 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;