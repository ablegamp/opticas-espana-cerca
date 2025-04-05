
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// List of Spanish provinces
const provincias = [
  'A Coruña', 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 
  'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 
  'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 
  'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lleida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 
  'Navarra', 'Ourense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Segovia', 
  'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 
  'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'
];

const ProvinciasSection = () => {
  return (
    <section id="provincias" className="py-16 bg-optica-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-optica-blue">Explora por Provincia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecciona una provincia para descubrir todas las ópticas disponibles en esa región.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {provincias.map((provincia, index) => (
            <div 
              key={provincia}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Link to={`/provincia/${provincia.toLowerCase().replace(/\s+/g, '-')}`} className="block p-5">
                <h3 className="font-medium text-lg mb-2 group-hover:text-optica-blue transition-colors">{provincia}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{Math.floor(Math.random() * 40) + 10} ópticas</span>
                  <span className="text-optica-orange group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvinciasSection;
