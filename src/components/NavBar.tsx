import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-[#1A1C1E] py-4 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo - Izquierda */}
          <div className="flex flex-1">
            <img 
              src={logo} 
              alt="Elite Tech Logo" 
              className="h-16 w-16 filter invert"
            />
          </div>

          {/* Menú - Centro */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-16">
              <a 
                href="#inicio" 
                onClick={() => setActiveLink('inicio')}
                className={`text-white relative group px-4 py-2 transition-colors hover:text-yellow-400 ${
                  activeLink === 'inicio' ? 'text-yellow-400' : ''
                }`}
              >
                <span className="text-lg">Inicio</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                  activeLink === 'inicio' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </a>
              <a 
                href="#servicios"
                onClick={() => setActiveLink('servicios')}
                className={`text-white relative group px-4 py-2 transition-colors hover:text-yellow-400 ${
                  activeLink === 'servicios' ? 'text-yellow-400' : ''
                }`}
              >
                <span className="text-lg">Servicios</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                  activeLink === 'servicios' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </a>
              <a 
                href="#nosotros"
                onClick={() => setActiveLink('nosotros')}
                className={`text-white relative group px-4 py-2 transition-colors hover:text-yellow-400 ${
                  activeLink === 'nosotros' ? 'text-yellow-400' : ''
                }`}
              >
                <span className="text-lg">Nosotros</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                  activeLink === 'nosotros' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </a>
              <a 
                href="#contacto"
                onClick={() => setActiveLink('contacto')}
                className={`text-white relative group px-4 py-2 transition-colors hover:text-yellow-400 ${
                  activeLink === 'contacto' ? 'text-yellow-400' : ''
                }`}
              >
                <span className="text-lg">Contacto</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                  activeLink === 'contacto' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </a>
            </div>
          </div>

          {/* Botón Contactar - Derecha */}
          <div className="hidden lg:flex flex-1 justify-end">
            <button className="bg-yellow-500 text-black px-8 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors">
              Contactar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bg-[#1A1C1E] shadow-lg">
          <div className="flex flex-col items-center gap-6 py-6">
            <a 
              href="#inicio"
              onClick={() => {
                setActiveLink('inicio');
                setIsMenuOpen(false);
              }}
              className={`text-white relative group px-4 py-2 transition-colors hover:text-yellow-400 ${
                activeLink === 'inicio' ? 'text-yellow-400' : ''
              }`}
            >
              <span className="text-lg">Inicio</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                activeLink === 'inicio' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <a 
              href="#servicios"
              onClick={() => {
                setActiveLink('servicios');
                setIsMenuOpen(false);
              }}
              className={`text-white relative group px-4 py-2 transition-colors hover:text-yellow-400 ${
                activeLink === 'servicios' ? 'text-yellow-400' : ''
              }`}
            >
              <span className="text-lg">Servicios</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                activeLink === 'servicios' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <a 
              href="#nosotros"
              onClick={() => {
                setActiveLink('nosotros');
                setIsMenuOpen(false);
              }}
              className={`text-white relative group px-4 py-2 transition-colors hover:text-yellow-400 ${
                activeLink === 'nosotros' ? 'text-yellow-400' : ''
              }`}
            >
              <span className="text-lg">Nosotros</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                activeLink === 'nosotros' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <a 
              href="#contacto"
              onClick={() => {
                setActiveLink('contacto');
                setIsMenuOpen(false);
              }}
              className={`text-white relative group px-4 py-2 transition-colors hover:text-yellow-400 ${
                activeLink === 'contacto' ? 'text-yellow-400' : ''
              }`}
            >
              <span className="text-lg">Contacto</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                activeLink === 'contacto' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <button 
              className="bg-yellow-500 text-black px-8 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors w-[calc(100%-3rem)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};