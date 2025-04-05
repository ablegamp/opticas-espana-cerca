
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es Tu Óptica Cerca?",
    answer: "Tu Óptica Cerca es un directorio completo que facilita la búsqueda de ópticas en todas las provincias de España. Nuestro objetivo es ayudar a los usuarios a encontrar fácilmente servicios ópticos cercanos y de calidad."
  },
  {
    question: "¿Es gratuito el uso de este directorio?",
    answer: "Sí, el uso de Tu Óptica Cerca es completamente gratuito para todos los usuarios. Puedes buscar, consultar información y contactar con las ópticas sin ningún costo."
  },
  {
    question: "¿Cómo puedo añadir mi establecimiento de óptica al directorio?",
    answer: "Si eres propietario o responsable de una óptica y deseas incluirla en nuestro directorio, simplemente utiliza nuestro formulario de contacto seleccionando la opción 'Incluir mi óptica'. Te responderemos con la información necesaria para completar el proceso."
  },
  {
    question: "¿La información de las ópticas está actualizada?",
    answer: "Trabajamos constantemente para mantener la información lo más actualizada posible. Sin embargo, recomendamos verificar los detalles directamente con la óptica antes de visitarla, especialmente horarios y servicios específicos."
  },
  {
    question: "¿Puedo dejar valoraciones sobre las ópticas?",
    answer: "Actualmente no disponemos de un sistema de valoraciones, pero estamos trabajando para implementar esta funcionalidad en futuras actualizaciones de la plataforma."
  },
  {
    question: "¿Cómo se organizan las ópticas en el directorio?",
    answer: "Las ópticas están organizadas principalmente por provincias. Dentro de cada provincia, puedes encontrarlas ordenadas alfabéticamente o filtrarlas según diversos criterios, como ubicación específica o servicios ofrecidos."
  },
  {
    question: "He encontrado información incorrecta sobre una óptica. ¿Cómo puedo reportarlo?",
    answer: "Si encuentras información inexacta o desactualizada, utiliza nuestro formulario de contacto seleccionando 'Reporte de error'. Nos encargaremos de verificar y corregir la información lo antes posible."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-optica-blue">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestro directorio de ópticas.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-optica-gray rounded-lg p-4">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="text-left font-medium hover:text-optica-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              ¿No encuentras respuesta a tu pregunta? 
              <a href="#contacto" className="text-optica-blue hover:underline ml-1">
                Contáctanos
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
