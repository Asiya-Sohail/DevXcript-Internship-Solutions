import Nav from './components/nav';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Feature from './components/Feature.jsx';
import Product from './components/Product.jsx';
import FAQ from './components/FAQ.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <div className='w-full min-h-screen'>
        <Nav />
        <Hero />
        <Services />
        <Feature />
        <Product />
        <FAQ />
        <Pricing />
        <Footer />
      </div>
    </>
  )
}

export default App