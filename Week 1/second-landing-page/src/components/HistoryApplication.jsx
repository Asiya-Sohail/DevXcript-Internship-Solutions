import React from 'react';

const HistoryApplication = () => {
  return (
    <div className="w-full container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Main Content Section */}
      <div className="bg-white rounded-3xl p-8 mb-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className=''>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2">
                The Future <br /> of <span className='text-blue-600'>Quality Health</span>
              </h1>
            </div>
            
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus 
                faucibus lectus risus sed ullamcorper. Auctor semper fermentum 
                volutpat integer vel. In rhoncus elementum nunc, malesuada mi 
                sed. Nibh est sit lobortis id semper.
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus 
                faucibus lectus risus sed ullamcorper. Auctor semper fermentum 
                volutpat integer vel. In rhoncus elementum nunc, malesuada mi 
                sed. Nibh est sit lobortis id semper.
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus 
                faucibus lectus risus sed ullamcorper. Auctor semper fermentum 
                volutpat integer vel. In rhoncus elementum nunc, malesuada mi 
                semper.
              </p>
            </div>
            
            <div className="pt-2">
              <button className="flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                Learn More
                <i class="ri-arrow-right-line w-10"></i>
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 max-w-md lg:max-w-none">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Doctor consulting with patient"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-blue-600 rounded-2xl px-12 py-20 text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-8">
          Subscribe To Our Newsletter
        </h2>
        
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-white rounded-full p-2 flex items-center shadow-lg">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-base"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition-colors flex-shrink-0">
              <i class="ri-arrow-right-line w-24"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryApplication;