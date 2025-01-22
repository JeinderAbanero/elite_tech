import { ChevronRight } from "lucide-react";
import { NavBar } from "./components/NavBar";
import { ServiceCard } from "./components/ServiceCard";
import { BestServiceCard } from "./components/BestServiceCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { LeadPopup } from "./components/LeadPopup";
import streamingStation from './assets/streaming-station.webp';
import ensambleImg from './assets/Ensamble.jpg';
import prebuiltImg from './assets/pre-built.png';
import asesoriaImg from './assets/Asesoria.jpg';
import gamerEliteImg from './assets/Ensamble Gamer Elite X.jpg';
import edicionImg from './assets/PC Profesional para Edición 4K.jpg';
import workstationImg from './assets/Workstation Profesional Creativo.jpg';
import intelLogo from './assets/Marcas/Intel-Logo 2.png';
import msiLogo from './assets/Marcas/msi-logo-for_digital_use_b 2.png';
import corsairLogo from './assets/Marcas/CORSAIRLogo2020_horiz_K 1.png';
import nvidiaLogo from './assets/Marcas/nvidia-geforce-rtx-logo 1.png';
import amdLogo from './assets/Marcas/Amd logo 2.png';
import logitechLogo from './assets/Marcas/logitech-logo 2.png';
import asusLogo from './assets/Marcas/Asus 2.png';
import aorusLogo from './assets/Marcas/aorus-thumb 2.png';
import aboutUsImage from './assets/about-us.webp';

const testimonials = [
  {
    name: "Eduardo G.",
    role: "Editor de Video",
    text: "La PC que me construyeron para la edición de video en 4K es increíble. Todo corre con una suavidad impresionante, incluso con archivos pesados. Me siento más seguro sabiendo que tengo un sistema capaz de manejar todo lo que le pido. ¡Gracias, Elite Tech, por el trabajo increíble!",
    avatar: "https://i.pravatar.cc/150?u=eduardo",
  },
  {
    name: "Carlos M.",
    role: "Streamer Profesional",
    text: "Desde que adquirí mi Estación de Streaming Profesional, mis transmisiones nunca han sido más fluidas. La calidad del hardware es impresionante y la asistencia que recibí para configurar todo fue de primer nivel. ¡Recomiendo totalmente Elite Tech para cualquier streamer que busque lo mejor!",
    avatar: "https://i.pravatar.cc/150?u=carlos",
  },
  {
    name: "Laura S.",
    role: "Programadora Freelance",
    text: "Gracias a Elite Tech, ahora tengo la máquina perfecta para mi trabajo diario. Me ayudaron a armar una PC potente para programar y trabajar con múltiples herramientas al mismo tiempo. El ensamble fue rápido, y la atención al cliente excelente. Estoy muy contenta con mi equipo.",
    avatar: "https://i.pravatar.cc/150?u=laura",
  },
  {
    name: "Ana L.",
    role: "Diseñadora Gráfica",
    text: "Trabajar con mi nueva Workstation ha sido un cambio total. Puedo manejar grandes proyectos de diseño sin ningún retraso. El equipo de Elite Tech entendió perfectamente lo que necesitaba y me ayudaron a configurar la PC perfecta. ¡Mi productividad ha mejorado enormemente!",
    avatar: "https://i.pravatar.cc/150?u=ana",
  },
  {
    name: "David T.",
    role: "Gamer Profesional",
    text: "Soy un gamer competitivo, y mi experiencia de juego nunca había sido tan buena. La PC que me construyeron no solo es rápida, sino que tiene una estética increíble. Desde la primera partida, noté la diferencia en rendimiento. Elite Tech realmente sabe lo que hace.",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <main className="pt-24">
        {/* Hero Section */}
        <section 
          id="inicio"
          className="min-h-screen flex items-center pt-1"
          style={{ backgroundColor: '#272B2C' }}
        >
          <div className="container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                    Tu PC Gaming 
                    <span className="text-yellow-500"> Personalizado</span>
                  </h1>
                  <p className="text-gray-300 text-xl leading-relaxed">
                    En <strong className="text-yellow-500">Elite Tech</strong> transformamos tus sueños en realidad. Diseñamos y ensamblamos PCs gaming de alto rendimiento que combinan potencia excepcional, estética única y la mejor tecnología del mercado.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div className="bg-[#1A1C1E] p-4 rounded-lg">
                    <div className="text-yellow-500 font-bold text-2xl mb-1">100%</div>
                    <div className="text-gray-400 text-sm">Componentes Originales</div>
                  </div>
                  <div className="bg-[#1A1C1E] p-4 rounded-lg">
                    <div className="text-yellow-500 font-bold text-2xl mb-1">3 Años</div>
                    <div className="text-gray-400 text-sm">Garantía</div>
                  </div>
                  <div className="bg-[#1A1C1E] p-4 rounded-lg">
                    <div className="text-yellow-500 font-bold text-2xl mb-1">24/7</div>
                    <div className="text-gray-400 text-sm">Soporte Técnico</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      const section = document.getElementById('productos');
                      section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-yellow-500 text-black px-8 py-4 rounded-md hover:bg-yellow-400 transition-colors font-medium flex items-center justify-center gap-2 text-lg"
                  >
                    Ver Productos
                    <ChevronRight size={24} />
                  </button>
                  <button 
                    onClick={() => {
                      const section = document.getElementById('contacto');
                      section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-md hover:bg-yellow-500 hover:text-black transition-colors font-medium flex items-center justify-center gap-2 text-lg"
                  >
                    Contactar
                  </button>
                </div>
              </div>

              <div className="relative lg:order-last">
                <div className="absolute -inset-4 bg-yellow-500/20 blur-xl rounded-full"></div>
                <div className="relative">
                  <img
                    src={streamingStation}
                    alt="Estación de Streaming Profesional"
                    className="w-full md:w-[90%] lg:w-full mx-auto"
                    style={{
                      borderTopLeftRadius: '16px',
                      borderBottomLeftRadius: '16px',
                      borderTopRightRadius: '74px',
                      borderBottomRightRadius: '0px'
                    }}
                  />
                  <div className="absolute -bottom-8 left-8 right-8 bg-[#1A1C1E]/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex justify-between items-center text-white">
                      <div>
                        <div className="font-bold">RTX 4090</div>
                        <div className="text-sm text-gray-300">Ultimate Gaming</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">Intel i9 13900K</div>
                        <div className="text-sm text-gray-300">Máximo Rendimiento</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                serviceType="ensamble"
              />
              <ServiceCard
                title="Venta de PC Pre-ensambladas"
                description="Equipos gaming pre-configurados y optimizados, listos para usar. Perfectos para quienes buscan rendimiento garantizado sin complicaciones."
                image={prebuiltImg}
                serviceType="pre-ensamblada"
              />
              <ServiceCard
                title="Asesoría Técnica"
                description="Te guiamos en cada paso para conseguir el PC perfecto. Desde la selección de componentes hasta la optimización del rendimiento, estamos aquí para ayudarte."
                image={asesoriaImg}
                serviceType="asesoria"
              />
            </div>

            <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center bg-[#556465] p-6 rounded mx-4 sm:mx-0">
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

        {/* Secciones Detalladas de Servicios */}
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
                      <h4 className="text-xl font-semibold mb-4">Tipos de Asesoría:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-[#272B2C] rounded-lg">
                          <h5 className="font-semibold mb-2">Asesoría Básica</h5>
                          <ul className="text-gray-400 text-sm space-y-1">
                            <li>• Consulta inicial</li>
                            <li>• Recomendaciones generales</li>
                            <li>• Presupuesto estimado</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-[#272B2C] rounded-lg">
                          <h5 className="font-semibold mb-2">Asesoría Premium</h5>
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

        {/* Featured Products Section */}
        <section id="productos"
          className="py-20"
          style={{ backgroundColor: '#657475' }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Productos Destacados
              </h2>
              <p className="text-gray-200 text-lg">
                Descubre nuestras configuraciones más populares, diseñadas para satisfacer las necesidades específicas de cada tipo de usuario. Rendimiento excepcional garantizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <BestServiceCard
                title="Ensamble Gamer Elite X"
                description={`• RTX 4070 Ti 12GB\n• Intel i7 13700K\n• 32GB RAM DDR5\n• 2TB NVMe SSD\nMáximo rendimiento para gaming competitivo y streaming.`}
                image={gamerEliteImg}
              />
              <BestServiceCard
                title="PC Profesional 4K"
                description={`• RTX 4080 16GB\n• Intel i9 13900K\n• 64GB RAM DDR5\n• 4TB NVMe SSD\nOptimizada para edición de video 4K y renderizado.`}
                image={edicionImg}
              />
              <BestServiceCard
                title="Workstation Creativa"
                description={`• RTX 4090 24GB\n• Intel i9 13900KS\n• 128GB RAM DDR5\n• 8TB NVMe SSD\nPotencia extrema para diseño 3D y desarrollo.`}
                image={workstationImg}
              />
            </div>

            <div className="mt-16 text-center">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center bg-[#556465] p-6 rounded mx-4 sm:mx-0">
                <div className="text-white">
                  <span className="block text-xl sm:text-2xl font-bold mb-1">¿Buscas una configuración personalizada?</span>
                  <span className="text-gray-200 text-sm sm:text-base">Podemos adaptar cualquiera de estos equipos a tus necesidades específicas</span>
                </div>
                <button className="w-full sm:w-auto bg-yellow-500 text-black px-6 sm:px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium">
                  Personalizar ahora
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="marcas" className="py-20 bg-[#E5E8E8] overflow-hidden">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6 text-center text-[#272B2C]">Marcas</h2>
            <p className="text-center text-gray-600 mb-12">
              En EliteTech, solo trabajamos con las marcas más reconocidas del
              sector para garantizar la calidad y el rendimiento superior de cada
              PC que ensamblamos.
            </p>
            
            {/* Mobile view with animation */}
            <div className="brand-container lg:hidden relative">
              <div className="brand-scroll flex gap-8 items-center justify-between">
                <img
                  src={intelLogo}
                  alt="Intel"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={msiLogo}
                  alt="MSI"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={corsairLogo}
                  alt="Corsair"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={nvidiaLogo}
                  alt="NVIDIA"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={amdLogo}
                  alt="AMD"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={logitechLogo}
                  alt="Logitech"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={asusLogo}
                  alt="ASUS"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src={aorusLogo}
                  alt="AORUS"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Desktop view with grid */}
            <div className="hidden lg:grid grid-cols-4 gap-16 items-center">
              <img
                src={intelLogo}
                alt="Intel"
                className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity transform hover:scale-105 duration-200"
              />
              <img
                src={msiLogo}
                alt="MSI"
                className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity transform hover:scale-105 duration-200"
              />
              <img
                src={corsairLogo}
                alt="Corsair"
                className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity transform hover:scale-105 duration-200"
              />
              <img
                src={nvidiaLogo}
                alt="NVIDIA"
                className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity transform hover:scale-105 duration-200"
              />
              <img
                src={amdLogo}
                alt="AMD"
                className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity transform hover:scale-105 duration-200"
              />
              <img
                src={logitechLogo}
                alt="Logitech"
                className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity transform hover:scale-105 duration-200"
              />
              <img
                src={asusLogo}
                alt="ASUS"
                className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity transform hover:scale-105 duration-200"
              />
              <img
                src={aorusLogo}
                alt="AORUS"
                className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity transform hover:scale-105 duration-200"
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section 
          id="nosotros"
          className="py-20"
          style={{ backgroundColor: '#272B2C' }}
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-white mb-8">
                  Sobre Nosotros
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg">
                    En Elite Tech, somos apasionados por la tecnología y expertos en crear experiencias gaming excepcionales. Con años de experiencia en el mercado, nos hemos convertido en líderes en el ensamblaje de PCs personalizadas y soluciones gaming de alto rendimiento.
                  </p>
                  <p className="text-gray-300 text-lg">
                    Nuestro equipo está formado por entusiastas del gaming y profesionales técnicos que entienden tus necesidades y te ayudan a conseguir el mejor rendimiento para tu inversión.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="text-yellow-500 text-4xl font-bold mb-2">5+</h3>
                      <p className="text-gray-400">Años de experiencia</p>
                    </div>
                    <div>
                      <h3 className="text-yellow-500 text-4xl font-bold mb-2">1000+</h3>
                      <p className="text-gray-400">PCs ensambladas</p>
                    </div>
                    <div>
                      <h3 className="text-yellow-500 text-4xl font-bold mb-2">98%</h3>
                      <p className="text-gray-400">Clientes satisfechos</p>
                    </div>
                    <div>
                      <h3 className="text-yellow-500 text-4xl font-bold mb-2">24/7</h3>
                      <p className="text-gray-400">Soporte técnico</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-first">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full "></div>
                  <img
                    src={aboutUsImage}
                    alt="Nuestro equipo trabajando"
                    className="relative z-10 rounded-lg w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios"
          className="py-20"
          style={{ backgroundColor: '#4A5354' }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-white text-center mb-16">
              Testimonios de Clientes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
            <div className="mt-8 max-w-2xl mx-auto">
              <TestimonialCard {...testimonials[4]} />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ  />

        {/* Lead Popup */}
        <LeadPopup />

        {/* Contact Form */}
        <div id="contacto">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;