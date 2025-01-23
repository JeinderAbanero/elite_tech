import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  streamingStation: string;
}

export const Hero: React.FC<HeroProps> = ({ streamingStation }) => {
  return (
    <section 
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
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-yellow-500 text-black px-8 py-4 rounded-md hover:bg-yellow-400 transition-colors font-medium flex items-center justify-center gap-2 text-lg"
              >
                Configurar mi PC
                <ChevronRight size={24} />
              </button>
              <button 
                onClick={() => {
                  document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-md hover:bg-yellow-500 hover:text-black transition-colors font-medium flex items-center justify-center gap-2 text-lg"
              >
                Ver Catálogo
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
  );
};
