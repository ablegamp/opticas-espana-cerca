
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OpticianDetailCard from '@/components/OpticianDetailCard';
import { Optician } from '@/models/optician';

// Barcelona optician data
const barcelonaOptician: Optician = {
  title: "C4 òptics - Óptica en Barcelona",
  category: "Óptica",
  address: "Carrer d'Aribau, 17, Eixample, 08011 Barcelona",
  description: "C4 òptics es una óptica en el centro de Barcelona que destaca por su gran profesionalidad y excelente servicio. Los clientes resaltan la amabilidad y atención detallada de su personal, especialmente Laia y Cristina, quienes ofrecen un asesoramiento de calidad para elegir la montura adecuada. La óptica cuenta con mucha variedad de marcas y modelos para todos los gustos y presupuestos. Los usuarios también valoran la rapidez en la entrega de las gafas, los buenos precios y la atención post-venta. Se realizan revisiones de la vista exhaustivas y se presta especial atención a la adaptación de las lentes.",
  serviceRatings: {
    atencionCliente: 5.0,
    profesionalidad: 5.0,
    precio: 4.7,
    variedad: 4.8
  },
  open_hours: {
    domingo: [
      "Cerrado"
    ],
    jueves: [
      "9:30–15:00",
      "16:30–20:00"
    ],
    lunes: [
      "9:30–15:00",
      "16:30–20:00"
    ],
    martes: [
      "9:30–15:00",
      "16:30–20:00"
    ],
    miércoles: [
      "9:30–20:00"
    ],
    sábado: [
      "10:00–13:30"
    ],
    viernes: [
      "9:30–15:00",
      "16:30–20:00"
    ]
  },
  website: "http://www.c4optics.com/",
  phone: "934 53 20 24",
  review_count: 347,
  review_rating: 5,
  latitude: 41.38658,
  longitude: 2.161428,
  user_reviews: [
    {
      Name: "sus susana",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKAjuTgQbRqw0VULFq4EpYo1WQ-OjyUB2ZfKN2Cfda-yCugbQ=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Optica en el centro de Barcelona, muy profesionales con un gran servicio.\nMe hice revisión de la vista para asegurarnos bien antes de hacer las gafas, me asesoro para elegir la montura que mejor me iban, tienen mucha variedad y muchas marcas.\nLa entrega a posterior fue muy rápida, menos de una semana, con muy buen precio.\nEn mi caso me atendió Laia, muy amable y profesional.\nPronto volveré hacerme otras gafas ( esta vez gafas de cerca ).",
      Images: [
        "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipO1_lxhyr1BF2iM9TUEUGeVBh-ElXb4d3-bvjzK&fid=0x0:0xb63f497872a77ae9"
      ],
      When: "2024-12-11"
    },
    {
      Name: "matias gonzalez",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJSCDkEzVXz_Tevq2UTKp3YrVFaTN5RDiMnsqnyvVfwmRRnpg=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Son los mejores! Laia es muy servicial y explica todo en detalles. Mi optica preferida en Barcelona. Muy satisfecho con mis nuevos lentes.",
      Images: [
        "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipN5Z1TwJS01S5DhF_Tv1WM6vSIf7d46OCbPuW5T&fid=0x0:0xb63f497872a77ae9"
      ],
      When: "2025-1-17"
    },
    {
      Name: "felix leloir",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIEiuwtFlpiwC-sqle6XzdI5cm_Ap7EMVA643BfiIo_ffiHQg=s120-c-rp-mo-ba3-br100",
      Rating: 5,
      Description: "Estaba un poco preocupado buscando dónde hacer mis primeros lentes, y estaba bastante desorientado hasta que di con esta óptica, que para comenzar tiene una atmósfera muy acogedora, y desde el segundo que ingrese al local sus empleadas me atendieron y aconsejaron  con una calidad humana de maravilla, destacó la atención, conocimiento, cordialidad, paciencia y no menos importante, el asesoramiento en todo momento de Laia y Cristina para ayudarme a elegir el modelo indicado en todo momento, el local tiene cantidad de modelos muy chulos que no he visto en otros negocios, y para todo los gustos y presupuestos.\nDestacó también la atención post venta!, algo que no es común en estos días, me han enviado mensajes y correos, para chequear cómo va la adaptación y comodidad con los lentes nuevos, realmente muy profesionales!!!, sin dudas recomiendo  esta óptica, por que resolvieron todas mis dudas y me han dado mucha confianza y tranquilidad, realmente una óptica con gente muy profesional!!",
      Images: [
        "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sAF1QipPb5-bBtfPloRbpybH_HsJsaAYLKrxEshwcYijR&fid=0x0:0xb63f497872a77ae9"
      ],
      When: "2024-4-2"
    },
    {
      Name: "Natascha Goovaerts",
      ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjUl8BHe2TgW1Ya72JKVQQXWWDE5ZI9cBrYlIO82dkVejuXGs9Bj=s120-c-rp-mo-ba2-br100",
      Rating: 5,
      Description: "Que servicio más excepcional y personalizado!\n\nOlga y su colega son muy buenas expertas y me han ayudado muy bien con consejos, tests y más.\n\n10000% recomendado! Muchísimas gracias por la amabilidad, paciencia y atención dedicada.",
      Images: null,
      When: ""
    },
    {
      Name: "Pablo Cruz",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocIbwAEtDrgBjM7r_pxVmc7DfcakL-_iKcNjCv3TfRxwf58w1g=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Un servicio excepcional y personalizado. Gracias especialmente a Laia por todas las explicaciones y ayuda para elegir las gafas más adecuadas a lo que necesitaba dentro de la amplia gama que ofrecen.",
      Images: null,
      When: ""
    },
    {
      Name: "Claire Vidal",
      ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVbdZlsgUyXZKh8z6DIW71VqVRG35BcVs6UixB8CcXpyM2ZgjgV=s120-c-rp-mo-ba4-br100",
      Rating: 5,
      Description: "C4 Òptics es la óptica de confianza de toda mi familia desde siempre. Empecé a ir cuando era niña, y a día de hoy sigo siendo una clienta fiel. Son grandes profesionales, y el trato y asesoramiento son impecables. Además, cuentan con una amplia variedad de monturas para todas las edades y gustos. Los recomiendo al 100%, hay pocos negocios que pongan tanto cariño, energía y calidad en todo lo que hacen.",
      Images: null,
      When: ""
    },
    {
      Name: "Ana del Cañizo",
      ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjXSGyPuI7qQjWvqCsJChobfw2oGEZHtM_mH8zTgPuYYFcxHvJMy=s120-c-rp-mo-ba2-br100",
      Rating: 5,
      Description: "Cristina es muy amable y ha atendido fenomenal mi caso complicado de lentillas. Al final me he acabado haciendo unas gafas que me hicieron rapidísimo. Recomiendo encarecidamente esta óptica.",
      Images: null,
      When: ""
    },
    {
      Name: "christian reyes lambea",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocKwyHO0EPiAvLrtQ4qOBQq6pXo9GU2AoK5QDAUwXk1UEtfy2Q=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Estoy muy contento del trato recibido y de mis gafas. Laia es una gran profesional, con paciencia, trato muy agradable y explicándote todo lo que necesitas. Graduando una crack! Gracias!",
      Images: null,
      When: ""
    }
  ],
  emails: ""
};

// Alicante optician data
const alicanteOptician: Optician = {
  title: "FUTURÓPTICAS",
  category: "Optometrista",
  address: "C. de Sant Mateu, 2 bis, 03013 Alicante",
  description: "En FUTURÓPTICAS, los usuarios destacan el trato amable y familiar que reciben, especialmente mencionando la atención y simpatía de Lorena. Además, valoran positivamente el asesoramiento profesional y los servicios adaptados a las necesidades individuales. Los precios también son considerados asequibles por varios clientes.",
  serviceRatings: {
    atencionCliente: 4.9,
    profesionalidad: 4.7,
    precio: 4.5,
    variedad: 3.5
  },
  open_hours: {
    domingo: [
      "Cerrado"
    ],
    jueves: [
      "10:00–13:30",
      "17:00–20:00"
    ],
    lunes: [
      "10:00–13:30",
      "17:00–20:00"
    ],
    martes: [
      "10:00–13:30",
      "17:00–20:00"
    ],
    miércoles: [
      "10:00–13:30",
      "17:00–20:00"
    ],
    sábado: [
      "Cerrado"
    ],
    viernes: [
      "10:00–13:30",
      "17:00–20:00"
    ]
  },
  website: "http://futuropticas.com/?utm_source=gmb&utm_medium=referral",
  phone: "965 21 95 90",
  review_count: 5,
  review_rating: 5,
  latitude: 38.355939,
  longitude: -0.479739,
  user_reviews: [
    {
      Name: "Eva maria manzanaro carrasco",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocLMB5BO8TmYD1RWHfgP-KX17MrTHLPiPhUR39Aa_EONm1lteA=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Lleve a mi hija con 6 años para sus primeras gafas y desde entonces vamos  toda la familia .\nUn trato amable , familiar  y precios asequibles .\nLorena es muy atenta y muy simpática.",
      Images: null,
      When: ""
    },
    {
      Name: "MARIA DEL MAR NAVARRO HERNANDEZ",
      ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjX8EvzqgxbTdwJZ4XPzRCHB68TC0kQMWrjYNaS0wzK1wmNX0XeB=s120-c-rp-mo-br100",
      Rating: 5,
      Description: "Mi óptica desde hace 12 años que lleve por vez primera a mi hijo y luego hemos ido los 4 miembros de la familia, la calidad humana de Lorena es lo mejor así como ser una magnífica profesional.\nYa no he ido nunca a otro sitio y siempre que puedo lo recomiendo.\nLa mejor óptica sin duda de Alicante.",
      Images: null,
      When: ""
    },
    {
      Name: "Gilberto Dobon",
      ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjV9wvweO867vzYA0rwXPycCFZ4epJyvZdhTIc_1DR-YRb5wZdrz=s120-c-rp-mo-ba4-br100",
      Rating: 5,
      Description: "Mi óptica de referencia en Alicante. Asesoramiento imparcial con servicios a medida del cliente.",
      Images: null,
      When: ""
    },
    {
      Name: "Asereth",
      ProfilePicture: "https://lh3.googleusercontent.com/a-/ALV-UjVU2TapPeu8rA-7zcO8qGesWFq4z4aDCNbpekp7zq2ofiDR1VMepw=s120-c-rp-mo-ba3-br100",
      Rating: 5,
      Description: "Muy buen trato.aconsejan muy bien y precios muy buenos.todo genial!! Repetiré en necesitar 😊😊",
      Images: null,
      When: ""
    },
    {
      Name: "Ada Quesada",
      ProfilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJseC3n6VrEFzgRlOA_hsO6KyjKU53VY2nK41JrqjBZzPFzcA=s120-c-rp-mo-ba3-br100",
      Rating: 5,
      Description: "",
      Images: null,
      When: ""
    }
  ],
  emails: ""
};

// Mock data structure for opticians in each province
const provincesData: Record<string, Optician[]> = {
  'barcelona': [barcelonaOptician],
  'madrid': [],
  'valencia': [],
  'sevilla': [],
  'bilbao': [],
  'zaragoza': [],
  'malaga': [],
  'murcia': [],
  'palma': [],
  'las-palmas': [],
  'alicante': [alicanteOptician],
  'cordoba': []
};

// Generate mock data for other provinces
Object.keys(provincesData).forEach(province => {
  if (province !== 'barcelona') {
    // Just generate empty arrays for now - we'll add real data later
    provincesData[province] = [];
  }
});

const ProvinceDetails = () => {
  const { provinceName } = useParams<{ provinceName: string }>();
  const [loading, setLoading] = useState(true);
  
  // Format province name for display
  const formattedProvinceName = provinceName 
    ? provinceName.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()) 
    : '';
  
  // Get opticians for this province
  const provinceKey = provinceName?.toLowerCase() || '';
  const opticians = provincesData[provinceKey] || [];
  
  // For now, we'll add the mock opticians for Barcelona and generate random ones for other provinces
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
  
  useEffect(() => {
    // Scroll to top when province changes
    window.scrollTo(0, 0);
    
    // Simulate loading data
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
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
              {loading ? (
                "Cargando establecimientos..."
              ) : (
                opticians.length > 0 
                  ? `Encontrados ${opticians.length} establecimientos ópticos en ${formattedProvinceName}`
                  : `No hay ópticas registradas en ${formattedProvinceName} todavía`
              )}
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-optica-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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
              <div className="lg:col-span-3">
                {loading ? (
                  // Loading skeleton
                  <div className="space-y-6">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                        <div className="h-8 bg-gray-200 rounded-md mb-4 w-1/3"></div>
                        <div className="h-4 bg-gray-200 rounded-md mb-3 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded-md mb-3 w-2/3"></div>
                        <div className="h-4 bg-gray-200 rounded-md mb-6 w-1/2"></div>
                        <div className="h-10 bg-gray-200 rounded-md w-1/4"></div>
                      </div>
                    ))}
                  </div>
                ) : opticians.length > 0 ? (
                  <div className="space-y-6">
                    {opticians.map((optica, index) => (
                      <OpticianDetailCard key={index} {...optica} />
                    ))}
                  </div>
                ) : (
                  // No results found
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <div className="text-optica-blue text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No hay resultados disponibles</h3>
                    <p className="text-gray-600 mb-6">
                      Aún no tenemos ópticas registradas en {formattedProvinceName}. Estamos trabajando para expandir nuestra base de datos.
                    </p>
                    <Link to="/#provincias" className="text-optica-blue hover:underline font-medium">
                      Explorar otras provincias →
                    </Link>
                  </div>
                )}
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
