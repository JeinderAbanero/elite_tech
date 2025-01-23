import React from 'react';
import { ServiceCard } from './ServiceCard';
import { ChevronRight } from 'lucide-react';


interface ServicesSectionProps {
  title?: string;
  description?: string;
  services: {
    title: string;
    description: string;
    image: string;
    serviceType: 'ensamble' | 'pre-ensamblada' | 'asesoria';
  }[];
  ensambleImg: string;
  prebuiltImg: string;
  asesoriaImg: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  title = "Nuestros servicios",
  description = "Descubre nuestra gama de servicios especializados diseñados para llevarte al siguiente nivel en gaming y rendimiento. Cada servicio está respaldado por nuestra experiencia y compromiso con la excelencia.",
  services,
  ensambleImg,
  prebuiltImg,
  asesoriaImg
}) => {
  return (
    <>
      <section 
        id="servicios" 
        className="py-20"
        style={{ backgroundColor: '#4A5354' }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-gray-300 text-lg">
              {description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center bg-[#556465] p-6 rounded mx-4 sm:mx-0">
              <div className="text-white">
                <span className="block text-2xl font-bold mb-1">¿No estás seguro de qué servicio necesitas?</span>
                <span className="text-gray-300">Contáctanos y te ayudaremos a encontrar la mejor solución</span>
              </div>
              <a href="#contacto" className="bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium whitespace-nowrap">
                Contactar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ensamble Personalizado */}
      <section id="ensamble-personalizado" className="py-20 bg-[#272B2C]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Ensamble <span className="text-yellow-500">Personalizado</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Creamos el PC de tus sueños, componente por componente. Nuestro servicio de ensamble personalizado te permite elegir exactamente lo que necesitas.
                </p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold mb-4">¿Qué incluye?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Asesoría Personalizada</span>
                        <p className="text-gray-400">Te ayudamos a elegir los mejores componentes según tu presupuesto y necesidades</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Ensamblaje Profesional</span>
                        <p className="text-gray-400">Montaje realizado por técnicos certificados con años de experiencia</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Pruebas de Rendimiento</span>
                        <p className="text-gray-400">Testeo completo de estabilidad y benchmarks para asegurar el máximo rendimiento</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Garantía Extendida</span>
                        <p className="text-gray-400">3 años de garantía en mano de obra y soporte técnico prioritario</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a href="#contacto" className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium">
                    Solicitar Presupuesto
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-500/20 blur-xl rounded-full"></div>
                <img 
                  src={ensambleImg}
                  alt="Ensamble Personalizado"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCs Pre-ensambladas */}
      <section id="pc-pre-ensambladas" className="py-20 bg-[#1A1C1E]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-yellow-500/20 blur-xl rounded-full"></div>
                <img 
                  src={prebuiltImg}
                  alt="PC Pre-ensamblada"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold mb-6">
                  PCs <span className="text-yellow-500">Pre-ensambladas</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Equipos gaming pre-configurados y optimizados, listos para usar. La solución perfecta para quienes buscan rendimiento garantizado sin complicaciones.
                </p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold mb-4">Ventajas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Disponibilidad Inmediata</span>
                        <p className="text-gray-400">Sin tiempos de espera, tu PC estará lista para retirar o enviar</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Configuraciones Optimizadas</span>
                        <p className="text-gray-400">Componentes seleccionados y testeados para asegurar compatibilidad total</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Mejor Relación Calidad-Precio</span>
                        <p className="text-gray-400">Precios especiales por compra de componentes en volumen</p>
                      </div>
                    </li>
                  </ul>
                  <div className="bg-[#272B2C] p-6 rounded-lg mt-6">
                    <h4 className="text-xl font-semibold mb-4">Configuraciones Disponibles:</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center p-3 bg-[#1A1C1E] rounded">
                        <span>Elite Starter Gaming</span>
                        <span className="text-yellow-500">Desde $800</span>
                      </li>
                      <li className="flex justify-between items-center p-3 bg-[#1A1C1E] rounded">
                        <span>Elite Pro Gaming</span>
                        <span className="text-yellow-500">Desde $1,500</span>
                      </li>
                      <li className="flex justify-between items-center p-3 bg-[#1A1C1E] rounded">
                        <span>Elite Ultra Gaming</span>
                        <span className="text-yellow-500">Desde $2,500</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#contacto" className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium">
                    Ver Disponibilidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asesoría Técnica */}
      <section id="asesoria-tecnica" className="py-20 bg-[#272B2C]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Asesoría <span className="text-yellow-500">Técnica</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  ¿No sabes por dónde empezar? Nuestro equipo de expertos te guiará en cada paso del proceso para conseguir el PC perfecto para tus necesidades.
                </p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold mb-4">Servicios de Asesoría</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Consultoría Personalizada</span>
                        <p className="text-gray-400">Evaluación detallada de tus necesidades y recomendaciones específicas</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Optimización de Presupuesto</span>
                        <p className="text-gray-400">Te ayudamos a sacar el máximo provecho de tu inversión</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <span className="font-semibold text-white">Soporte Post-Venta</span>
                        <p className="text-gray-400">Asistencia continua para optimización y resolución de problemas</p>
                      </div>
                    </li>
                  </ul>
                  <div className="bg-[#1A1C1E] p-6 rounded-lg mt-6">
                    <h4 className="text-xl font-semibold mb-4 text-white">Tipos de Asesoría:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-[#272B2C] rounded-lg">
                        <h5 className="font-semibold mb-2 text-white">Asesoría Básica</h5>
                        <ul className="text-gray-400 text-sm space-y-1">
                          <li>• Consulta inicial</li>
                          <li>• Recomendaciones generales</li>
                          <li>• Presupuesto estimado</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-[#272B2C] rounded-lg">
                        <h5 className="font-semibold mb-2 text-white">Asesoría Premium</h5>
                        <ul className="text-gray-400 text-sm space-y-1">
                          <li>• Análisis detallado</li>
                          <li>• Plan personalizado</li>
                          <li>• Seguimiento continuo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#contacto" className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium">
                    Solicitar Asesoría
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-500/20 blur-xl rounded-full"></div>
                <img 
                  src={asesoriaImg}
                  alt="Asesoría Técnica"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
