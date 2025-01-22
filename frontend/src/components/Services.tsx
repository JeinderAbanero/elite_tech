import React from 'react';
import { ServiceCard } from './ServiceCard';

interface ServicesProps {
  ensambleImg: string;
  prebuiltImg: string;
  asesoriaImg: string;
}

export const Services: React.FC<ServicesProps> = ({ ensambleImg, prebuiltImg, asesoriaImg }) => {
  return (
    <section 
      id="servicios" 
      className="py-20"
      style={{ backgroundColor: '#4A5354' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Nuestros servicios
          </h2>
          <p className="text-gray-300 text-lg">
            Descubre nuestra gama de servicios especializados diseñados para llevarte al siguiente nivel en gaming y rendimiento. Cada servicio está respaldado por nuestra experiencia y compromiso con la excelencia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard
            title="Ensamble Personalizado"
            description="Creamos equipos de alto rendimiento según tus necesidades específicas. Seleccionamos cuidadosamente cada componente para asegurar la mejor experiencia gaming."
            image={ensambleImg}
          />
          <ServiceCard
            title="Venta de PC Pre-ensambladas"
            description="Equipos gaming pre-configurados y optimizados, listos para usar. Perfectos para quienes buscan rendimiento garantizado sin complicaciones."
            image={prebuiltImg}
          />
          <ServiceCard
            title="Asesoría Técnica"
            description="Te guiamos en cada paso para conseguir el PC perfecto. Desde la selección de componentes hasta la optimización del rendimiento, estamos aquí para ayudarte."
            image={asesoriaImg}
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex gap-8 items-center justify-center bg-[#3A4344] p-6 rounded">
            <div className="text-white">
              <span className="block text-2xl font-bold mb-1">¿No estás seguro de qué servicio necesitas?</span>
              <span className="text-gray-300">Contáctanos y te ayudaremos a encontrar la mejor solución</span>
            </div>
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium whitespace-nowrap">
              Contactar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
