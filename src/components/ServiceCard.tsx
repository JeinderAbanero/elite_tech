import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  serviceType: 'ensamble' | 'pre-ensamblada' | 'asesoria';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  serviceType
}) => {
  const getServiceLink = () => {
    switch (serviceType) {
      case 'ensamble':
        return '#ensamble-personalizado';
      case 'pre-ensamblada':
        return '#pc-pre-ensambladas';
      case 'asesoria':
        return '#asesoria-tecnica';
      default:
        return '#servicios';
    }
  };

  const getServiceAction = () => {
    switch (serviceType) {
      case 'ensamble':
        return 'Personalizar PC';
      case 'pre-ensamblada':
        return 'Ver Catálogo';
      case 'asesoria':
        return 'Consultar Ahora';
      default:
        return 'Ver más';
    }
  };

  return (
    <div 
      className="overflow-hidden shadow-lg transform transition-transform hover:scale-105"
      style={{ backgroundColor: '#F5F6F6' }}
    >
      <div className="p-6">
        <div className="aspect-[4/3] mb-8 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#272B2C' }}>
          {title}
        </h3>
        <p className="text-center leading-relaxed mb-6" style={{ color: '#272B2C' }}>
          {description}
        </p>
        <a 
          href={getServiceLink()}
          className="block w-full bg-yellow-500 text-black py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium text-center"
        >
          {getServiceAction()}
        </a>
      </div>
    </div>
  );
};