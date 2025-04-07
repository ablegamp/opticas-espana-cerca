
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If section not found in current page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  // Effect to handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-optica-blue">
              Tu Óptica <span className="text-optica-orange">Cerca</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('provincias')}
              className="font-medium text-gray-700 hover:text-optica-blue transition-colors"
            >
              Provincias
            </button>
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="font-medium text-gray-700 hover:text-optica-blue transition-colors"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="font-medium text-gray-700 hover:text-optica-blue transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-optica-orange hover:bg-optica-light-orange text-white"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-optica-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('provincias')}
                className="font-medium text-gray-700 hover:text-optica-blue transition-colors py-2"
              >
                Provincias
              </button>
              <button
                onClick={() => scrollToSection('sobre-nosotros')}
                className="font-medium text-gray-700 hover:text-optica-blue transition-colors py-2"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="font-medium text-gray-700 hover:text-optica-blue transition-colors py-2"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-optica-orange hover:bg-optica-light-orange text-white w-full"
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
