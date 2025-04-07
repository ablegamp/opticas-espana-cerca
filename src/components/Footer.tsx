
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If section not found in current page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="bg-optica-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-xl">Tu Óptica Cerca</p>
            <p className="text-blue-200 text-sm">
              © {currentYear} Todos los derechos reservados
            </p>
          </div>
          
          <div className="flex space-x-6">
            <button 
              onClick={() => scrollToSection('sobre-nosotros')} 
              className="text-blue-200 hover:text-white transition-colors"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('provincias')} 
              className="text-blue-200 hover:text-white transition-colors"
            >
              Provincias
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-blue-200 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-blue-200 hover:text-white transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
