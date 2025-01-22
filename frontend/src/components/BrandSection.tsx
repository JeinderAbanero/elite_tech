import React from 'react';

interface BrandProps {
  logos: string[];
}

export const BrandSection: React.FC<BrandProps> = ({ logos }) => {
  return (
    <section className="py-16" style={{ backgroundColor: '#657475' }}>
      <div className="container mx-auto px-4">
        <div className="bg-[#E5E8E8] py-12 rounded-lg">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="w-[120px] h-[60px] md:w-[150px] md:h-[75px] lg:w-[180px] lg:h-[90px] flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
