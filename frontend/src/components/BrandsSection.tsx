import React from 'react';
import intelLogo from '../assets/Marcas/Intel-Logo 2.png';
import msiLogo from '../assets/Marcas/msi-logo-for_digital_use_b 2.png';
import corsairLogo from '../assets/Marcas/CORSAIRLogo2020_horiz_K 1.png';
import nvidiaLogo from '../assets/Marcas/nvidia-geforce-rtx-logo 1.png';
import amdLogo from '../assets/Marcas/Amd logo 2.png';
import logitechLogo from '../assets/Marcas/logitech-logo 2.png';
import asusLogo from '../assets/Marcas/Asus 2.png';
import aorusLogo from '../assets/Marcas/aorus-thumb 2.png';

const brands = [
  { name: 'Intel', logo: intelLogo },
  { name: 'MSI', logo: msiLogo },
  { name: 'Corsair', logo: corsairLogo },
  { name: 'NVIDIA', logo: nvidiaLogo },
  { name: 'AMD', logo: amdLogo },
  { name: 'Logitech', logo: logitechLogo },
  { name: 'ASUS', logo: asusLogo },
  { name: 'AORUS', logo: aorusLogo },
];

export const BrandsSection: React.FC = () => {
  return (
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
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Desktop view with grid */}
        <div className="hidden lg:grid grid-cols-4 gap-16 items-center">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity transform hover:scale-105 duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
