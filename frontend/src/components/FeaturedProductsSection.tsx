import React from 'react';
import { BestServiceCard } from './BestServiceCard';
import gamerEliteImg from '../assets/Ensamble Gamer Elite X.jpg';
import edicionImg from '../assets/PC Profesional para Edición 4K.jpg';
import workstationImg from '../assets/Workstation Profesional Creativo.jpg';

export const FeaturedProductsSection: React.FC = () => {
  return (
    <section 
      id="productos"
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
              <span className="block text-2xl font-bold mb-1">¿Buscas una configuración personalizada?</span>
              <span className="text-gray-200">Podemos adaptar cualquiera de estos equipos a tus necesidades específicas</span>
            </div>
            <button 
              onClick={() => {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium whitespace-nowrap"
            >
              Personalizar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
