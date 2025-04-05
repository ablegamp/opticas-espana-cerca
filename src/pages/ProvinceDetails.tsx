
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Mock data for opticians in a province
const generateMockOpticians = (count: number) => {
  const names = [
    'Óptica Visión', 'Centro Óptico', 'Óptica Central', 'Óptica Moderna', 
    'Visión Plus', 'Óptica Salud', 'Opticalia', 'MultiÓpticas', 'Óptica Express',
    'General Óptica', 'Alain Afflelou', 'Óptica Vista Clara', 'Óptica Universitaria',
    'Solóptica', 'Óptica del Sol', 'Visionlab', 'Óptica Perfect', 'Óptica Visual'
  ];
  
  const addresses = [
    'Calle Mayor', 'Avenida Principal', 'Plaza Central', 'Calle del Sol',
    'Avenida Constitución', 'Calle Real', 'Paseo Marítimo', 'Calle Comercio',
    'Gran Vía', 'Calle Nueva', 'Avenida Libertad', 'Calle Valencia'
  ];
  
  const result = [];
  
  for (let i = 0; i < count; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
    const number = Math.floor(Math.random() * 100) + 1;
    const phone = `9${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
    
    result.push({
      id: i + 1,
      name: `${randomName} ${i + 1}`,
      address: `${randomAddress} ${number}`,
      phone: phone,
      hours: 'Lun-Vie: 10:00-20:00, Sáb: 10:00-14:00',
      services: ['Graduación', 'Lentes de contacto', 'Gafas de sol', 'Audiología'].slice(0, Math.floor(Math.random() * 4) + 1),
      website: Math.random() > 0.5 ? `https://www.${randomName.toLowerCase().replace(/\s+/g, '')}.es` : null
    });
  }
  
  return result;
};

const ProvinceDetails = () => {
  const { provinceName } = useParams<{ provinceName: string }>();
  const formattedProvinceName = provinceName ? provinceName.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()) : '';
  
  // Generate between 15-30 mock opticians
  const opticians = generateMockOpticians(Math.floor(Math.random() * 15) + 15);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [provinceName]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-optica-blue text-white py-12">
          <div className="container mx-auto px-4">
            <Link to="/#provincias" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
              <ArrowLeft size={18} className="mr-2" />
              Volver a todas las provincias
            </Link>
            
            <h1 className="text-4xl font-bold">Ópticas en {formattedProvinceName}</h1>
            <p className="mt-2 text-blue-100">
              Encontrados {opticians.length} establecimientos ópticos en {formattedProvinceName}
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-optica-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar with other provinces */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4 text-optica-blue">Otras Provincias</h2>
                  <div className="max-h-[500px] overflow-y-auto pr-2 space-y-1">
                    {['A Coruña', 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Barcelona', 'Cádiz', 'Madrid', 'Valencia'].map((provincia) => (
                      <Link
                        key={provincia}
                        to={`/provincia/${provincia.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`block py-2 px-3 rounded-md hover:bg-optica-gray transition-colors ${
                          formattedProvinceName.toLowerCase() === provincia.toLowerCase() 
                            ? 'bg-optica-blue text-white hover:bg-optica-blue' 
                            : 'text-gray-700'
                        }`}
                      >
                        {provincia}
                      </Link>
                    ))}
                    <Link 
                      to="/#provincias"
                      className="block py-2 px-3 text-optica-blue font-medium hover:underline"
                    >
                      Ver todas las provincias →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Main content with opticians */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {opticians.map((optica) => (
                    <div 
                      key={optica.id}
                      className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg"
                    >
                      <h2 className="text-xl font-bold text-optica-blue mb-2">{optica.name}</h2>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin size={18} className="mr-2 text-optica-orange" />
                          <span>{optica.address}, {formattedProvinceName}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Phone size={18} className="mr-2 text-optica-orange" />
                          <span>{optica.phone}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Clock size={18} className="mr-2 text-optica-orange" />
                          <span>{optica.hours}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-medium mb-2">Servicios:</h3>
                        <div className="flex flex-wrap gap-2">
                          {optica.services.map((service, index) => (
                            <span 
                              key={index}
                              className="inline-block bg-blue-100 text-optica-blue text-sm px-3 py-1 rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        {optica.website ? (
                          <Button asChild className="bg-optica-orange hover:bg-optica-light-orange">
                            <a href={optica.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                              Visitar web
                              <ExternalLink size={16} className="ml-2" />
                            </a>
                          </Button>
                        ) : (
                          <span className="text-sm text-gray-500 italic">Web no disponible</span>
                        )}
                        
                        <Button variant="outline" className="border-optica-blue text-optica-blue hover:bg-optica-blue hover:text-white">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProvinceDetails;
