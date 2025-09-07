import React from 'react';
import avatar1 from '../assets/avatars/avatar-1.png'
import avatar2 from '../assets/avatars/avatar-2.png'
import avatar3 from '../assets/avatars/avatar-3.png'
import avatar4 from '../assets/avatars/avatar-4.png'
import avatar5 from '../assets/avatars/avatar-5.png'
import avatar6 from '../assets/avatars/avatar-6.png'

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 md:flex md:justify-between md:items-center gap-4 items-center">
      {/* Heading */}
      <div className="mb-12 w-xl flex flex-col gap-6 px-4">
        <h1 className="md:text-5xl text-3xl font-bold text-gray-800 mb-4">What <span className='text-blue-600'>Our Member's</span> <br /> Saying About Us</h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Sem velit viverra amet laucibus.
        </p>
        <div className="mt-6 flex items-center ">
          <img src={avatar1} alt="Avatar 1" className='w-12 -ml-2'/>
          <img src={avatar2} alt="Avatar 1" className='w-12 -ml-2'/>
          <img src={avatar3} alt="Avatar 1" className='w-12 -ml-2'/>
          <img src={avatar4} alt="Avatar 1" className='w-12 -ml-2'/>
          <img src={avatar5} alt="Avatar 1" className='w-12 -ml-2'/>
          <img src={avatar6} alt="Avatar 1" className='w-12 -ml-2'/>
          <p className='font-semibold ml-4'>100+ Reviews</p>
        </div>
      </div>
      
      {/* Testimonial Card */}
      <div className="bg-white rounded-lg border border-solid border-gray-400 p-10 md:max-w-1/2">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
              alt="Jane Cooper" 
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          
          {/* Testimonial Content */}
          <div>
            <div className='flex justify-between'>
              <div className="left flex flex-col mb-4">
                <h3 className="text-xl font-bold text-gray-800">Jane Cooper</h3>
                <span className="text-gray-500 text-sm">1/4/27</span>
              </div>
              <div className='right'>
                <i class="ri-star-fill text-yellow-500 text-2xl"></i>
                <i class="ri-star-fill text-yellow-500 text-2xl"></i>
                <i class="ri-star-fill text-yellow-500 text-2xl"></i>
                <i class="ri-star-fill text-yellow-500 text-2xl"></i>
                <i class="ri-star-fill text-yellow-500 text-2xl"></i>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet laucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet laucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet laucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;