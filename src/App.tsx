import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ReservationBooster from './components/ReservationBooster';
import Photography from './components/Photography';
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
import GDPRBanner from './components/GDPRBanner';
import DiagnosticPage from './components/DiagnosticPage';

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
    <GDPRBanner />
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
        <Route path="/diagnostic" element={<DiagnosticPage />} />
      </Routes>
      <GDPRBanner />
    </Router>
  );
}

export default App;