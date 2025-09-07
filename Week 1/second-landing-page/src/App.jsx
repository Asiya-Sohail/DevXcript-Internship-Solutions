import './App.css'
import 'remixicon/fonts/remixicon.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import HistoryApplication from './components/HistoryApplication';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className='bg-[rgb(225,238,255)]'>
        <Nav />
        <section className="pt-8">
          <Hero />
        </section>
      </div>
        <About />
      <div className='bg-[rgb(225,238,255)] mt-8 py-20'>
        <Testimonials />
      </div>
      <HistoryApplication />
      <Footer />
    </div>
  );
}

export default App;