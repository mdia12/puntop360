import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Fotografía', href: '/#fotografia' },
    { label: 'Tecnología', href: '/#tecnologia' },
    { label: 'Casos de Éxito', href: '/#casos' },
    { label: 'Contacto', href: '/#contacto' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== '/') {
        window.location.href = href;
      } else {
        // If we're on home page, smooth scroll to section
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="bg-gold rounded-full p-2">
              <Utensils className="h-6 w-6 text-dark" />
            </div>
            <span className="text-xl font-bold font-poppins text-white">
              Punto360
            </span>
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-white hover:text-gold font-poppins font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://wa.me/34636814464"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-dark font-poppins font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700 py-4 animate-slide-up">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                  setIsMenuOpen(false);
                }}
                className="block py-3 text-white hover:text-gold font-poppins transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/34636814464"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-gold text-dark font-poppins font-semibold px-6 py-3 rounded-full text-center transition-colors hover:bg-gold-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactar
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;