
import React from 'react';
import { Users, Search, MapPin, Building } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section id="sobre-nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-optica-blue">Sobre Nosotros</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tu Óptica Cerca es el directorio más completo de establecimientos ópticos en España, 
            diseñado para conectar a los ciudadanos con servicios ópticos de calidad cerca de su ubicación.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-optica-gray rounded-lg p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-optica-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Search size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fácil Búsqueda</h3>
            <p className="text-gray-600">
              Encuentra rápidamente ópticas cercanas con nuestra potente herramienta de búsqueda por provincia o localidad.
            </p>
          </div>
          
          <div className="bg-optica-gray rounded-lg p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-optica-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cobertura Nacional</h3>
            <p className="text-gray-600">
              Abarcamos todas las provincias de España, garantizando acceso a servicios ópticos en todo el territorio.
            </p>
          </div>
          
          <div className="bg-optica-gray rounded-lg p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-optica-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Building size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Directorio Completo</h3>
            <p className="text-gray-600">
              Ofrecemos información detallada sobre cada óptica, incluyendo servicios, horarios y datos de contacto.
            </p>
          </div>
          
          <div className="bg-optica-gray rounded-lg p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-optica-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
            <p className="text-gray-600">
              Creamos una comunidad entre usuarios y profesionales ópticos, facilitando el acceso a servicios de calidad.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-optica-blue to-blue-700 rounded-xl p-8 text-white">
          <div className="md:flex items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-3">Nuestra Misión</h3>
              <p className="text-blue-100">
                En Tu Óptica Cerca, nos dedicamos a facilitar el acceso a servicios ópticos de calidad 
                a todos los ciudadanos españoles. Creemos que la buena visión es un derecho fundamental, 
                y nuestra plataforma está diseñada para conectar a las personas con los profesionales 
                adecuados de manera rápida y sencilla, en cualquier punto de España.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center animate-bounce-subtle">
                <span className="text-optica-blue text-4xl font-bold">TÓC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
