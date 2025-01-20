import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, ExternalLink, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-[#1A1C1E] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y Sobre Nosotros */}
          <div className="flex flex-col items-start">
            <img 
              src={logo} 
              alt="Elite Tech Logo" 
              className="h-16 w-16 filter invert mb-4"
            />
            <p className="text-sm">
              Expertos en soluciones tecnológicas personalizadas para gaming, 
              streaming y workstations profesionales.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  Servicios
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  Productos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Mejorado */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="group">
                <a href="tel:+584241234567" className="flex items-start gap-3 hover:text-white transition-colors">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Llámanos</p>
                    <p className="text-sm text-gray-400">+58 424-1234567</p>
                  </div>
                </a>
              </li>
              <li className="group">
                <a href="mailto:contacto@elitetech.com" className="flex items-start gap-3 hover:text-white transition-colors">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">contacto@elitetech.com</p>
                  </div>
                </a>
              </li>
              <li className="group">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Horario</p>
                    <p className="text-sm text-gray-400">Lun - Vie: 9:00 - 18:00</p>
                    <p className="text-sm text-gray-400">Sáb: 9:00 - 13:00</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" 
                   className="flex items-start gap-3 hover:text-white transition-colors">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-sm text-gray-400">Ciudad Guayana,Bolívar, Venezuela</p>
                    <span className="text-sm text-blue-400 flex items-center gap-1">
                      Ver en mapa <ExternalLink size={12} />
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-3 rounded-lg hover:bg-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              {new Date().getFullYear()} Elite Tech. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacidad" className="text-sm hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="text-sm hover:text-white transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
