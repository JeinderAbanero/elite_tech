import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export const TestimonialCard = ({ name, role, text, avatar }: TestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div 
        className="flex items-center gap-4 mb-4 cursor-pointer md:cursor-default relative group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600">{role}</p>
          <span className="text-yellow-500 text-sm md:hidden">
            {isExpanded ? 'Click para ocultar' : 'Click para ver testimonio'}
          </span>
        </div>
        <ChevronDown 
          className={`md:hidden text-yellow-500 transition-transform ${isExpanded ? 'rotate-180' : ''} group-hover:scale-110`} 
          size={24}
        />
      </div>
      <div className={`md:block ${isExpanded ? 'block' : 'hidden'}`}>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};