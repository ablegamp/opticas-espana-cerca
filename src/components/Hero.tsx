
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-optica-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-optica-blue to-blue-800 z-0"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Encuentra tu óptica ideal en toda España
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Explora el directorio más completo de ópticas por provincias. Servicio, calidad y cercanía a un solo clic.
          </p>
          
          <div className="mt-10 flex justify-center space-x-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <p className="text-3xl font-bold">52</p>
              <p className="text-blue-100">Provincias</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">1000+</p>
              <p className="text-blue-100">Ópticas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-blue-100">Gratis</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
    </div>
  );
};

export default Hero;
