import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Steps from './components/Steps';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import CaseStudies from './components/CaseStudies';
import Blog from './components/Blog';
import Sponsors from './components/Sponsors';
import WhyChooseUs from './components/WhyChooseUs';
import ModernCTA from './components/ModernCTA';

function App() {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Steps />
        <WhyChooseUs />
        <CaseStudies />
        <Team />
        <Testimonials />
        <ModernCTA />
        <Blog />
        <Sponsors />
      </main>
      <Footer />

      {/* Scroll to top button (optional) */}
      <a
        href="#home"
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40 opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  )
}

export default App
