import React from 'react';

interface BestServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export const BestServiceCard: React.FC<BestServiceCardProps> = ({
  title,
  description,
  image
}) => {
  return (
    <div 
      className="overflow-hidden shadow-lg"
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
        <div className="whitespace-pre-line text-center leading-relaxed" style={{ color: '#272B2C' }}>
          {description}
        </div>
      </div>
    </div>
  );
};