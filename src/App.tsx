import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ReservationBooster from './components/ReservationBooster';
import Photography from './components/Photography';
import Technology from './components/Technology';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import ValueProposition from './components/ValueProposition';
import CTA from './components/CTA';
import FinalCTA from './components/FinalCTA';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import PilotPage from './components/PilotPage';
import GalleryPage from './components/GalleryPage';
import BlogArticle from './components/BlogArticle';
import Gallery from './components/Gallery';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const HomePage = () => (
  <div className="font-poppins">
    <Header />
    <main>
      <Hero />
      <Photography />
      <Gallery />
      <Services />
      <ReservationBooster />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <ValueProposition />
      <Blog />
      <CTA />
      <FinalCTA />
    </main>
    <Footer />
    <Chatbot />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pilot" element={<PilotPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
      </Routes>
    </Router>
  );
}

export default App;