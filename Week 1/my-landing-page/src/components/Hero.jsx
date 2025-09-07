import HeroImage from "../assets/hero-image.png";
import "../index.css";

function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-gradient-to-br from-gray-100 to-gray-200 py-16 sm:py-20 lg:py-32"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between align-middle">
          <div>
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Lessons and insights
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4CAF4F] mb-4 sm:mb-6 leading-tight">
              from 8 years
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl leading-relaxed">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-12 sm:mb-16">
              <button className="bg-[#4CAF4F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#3a8a3d] transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Register
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="w-[50%] max-w-7xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
