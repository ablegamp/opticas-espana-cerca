
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
            <Link to="/#sobre-nosotros" className="text-blue-200 hover:text-white transition-colors">
              Sobre Nosotros
            </Link>
            <Link to="/#provincias" className="text-blue-200 hover:text-white transition-colors">
              Provincias
            </Link>
            <Link to="/#faq" className="text-blue-200 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link to="/#contacto" className="text-blue-200 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
