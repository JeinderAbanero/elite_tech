import React from 'react';

interface AboutUsSectionProps {
  title: string;
  description: string[];
  image: string;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  title,
  description,
  image
}) => {
  return (
    <section 
      id="nosotros"
      className="py-20"
      style={{ backgroundColor: '#272B2C' }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-8">
              {title}
            </h2>
            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-lg">
                  {paragraph}
                </p>
              ))}
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
              <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full"></div>
              <img
                src={image}
                alt="Nuestro equipo trabajando"
                className="relative z-10 rounded-lg w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
