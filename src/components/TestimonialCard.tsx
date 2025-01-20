import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export const TestimonialCard = ({ name, role, text, avatar }: TestimonialCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center gap-4 mb-4">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
      <div>
        <h4 className="font-bold text-gray-800">{name}</h4>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-700">{text}</p>
  </div>
);