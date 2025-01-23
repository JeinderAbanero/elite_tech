import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios"
      className="py-20"
      style={{ backgroundColor: '#4A5354' }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-white text-center mb-16">
          Testimonios de Clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="mt-8 max-w-2xl mx-auto">
          <TestimonialCard {...testimonials[4]} />
        </div>
      </div>
    </section>
  );
};
