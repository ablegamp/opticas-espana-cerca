
import React, { useState } from 'react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Formulario enviado",
        description: "Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.",
      });
      
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-16 bg-optica-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-optica-blue">Contacto</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o sugerencia? ¿Eres un profesional que desea incluir su óptica en nuestro directorio? 
            Contáctanos y te responderemos lo antes posible.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-optica-blue"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-optica-blue"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-optica-blue"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="Incluir mi óptica">Incluir mi óptica</option>
                  <option value="Sugerencia">Sugerencia</option>
                  <option value="Reporte de error">Reporte de error</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-optica-blue"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-optica-blue hover:bg-blue-800 text-white px-8 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
