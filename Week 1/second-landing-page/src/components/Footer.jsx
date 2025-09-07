
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6 mt-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center mb-12">
          
          {/* Left Column - E-sheba */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">E-sheba</h3>
            
            <div className="space-y-2 text-sm leading-relaxed text-blue-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Nec risus feugiat lectus risus sed 
                ullamcorper. Auctor semper fermentum
              </p>
              <p>
                volutpat integer vel. In rhoncus elementum nunc, 
                malesuada mi sed. Nibh est sit lobortis id semper.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 pt-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-white/20 rounded-full flex items-center text-center justify-center hover:bg-white/30 transition-colors"
              >
                <i class="ri-facebook-circle-fill w-24"></i>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/20 rounded-full flex items-center text-center justify-center hover:bg-white/30 transition-colors"
              >
                <i class="ri-instagram-fill w-full"></i>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/20 rounded-full flex items-center text-center justify-center hover:bg-white/30 transition-colors"
              >
                <i class="ri-twitter-fill w-24"></i>
              </a>
            </div>
          </div>
          
          {/* Middle Column - Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          
          {/* Right Column - Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            
            <div className="bg-white/10 rounded-lg p-1 max-w-xs">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Location Map"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-blue-500 pt-6">
          <p className="text-center text-blue-100 text-sm">
            © 2022 All Right Reserved
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;