import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import logo from '../assets/logo.svg';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-800 font-medium text-left">{question}</span>
        {isOpen ? (
          <Minus className="text-yellow-500 flex-shrink-0" size={20} />
        ) : (
          <Plus className="text-yellow-500 flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ = () => (
  <section id="faq" className="py-20" style={{ backgroundColor: '#CDD4D4' }}>
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3 flex flex-col items-center">
          <img 
            src={logo} 
            alt="Elite Tech" 
            className="w-48 h-48 mb-6"
            style={{ filter: 'invert(37%) sepia(8%) saturate(654%) hue-rotate(147deg) brightness(92%) contrast(88%)' }}
          />
          <h2 className="text-4xl font-bold text-[#576263] text-center">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="lg:w-2/3 space-y-4">
          <FAQItem 
            question="¿Qué tipos de PCs puedo encargar con el servicio de Ensamble Personalizado?"
            answer="Te asesoramos en la selección de los mejores componentes según tus necesidades, y tú decides qué piezas incluir en tu PC. Podemos crear PCs para gaming, workstations para diseño y edición, equipos para streaming, y computadoras para uso profesional o empresarial."
          />
          <FAQItem 
            question="¿Ofrecen garantía en los equipos ensamblados?"
            answer="Sí, todos nuestros equipos ensamblados cuentan con garantía de 1 año en mano de obra y ensamblaje. Además, cada componente mantiene su garantía individual del fabricante, que puede variar entre 1 a 5 años dependiendo del componente."
          />
          <FAQItem 
            question="¿Puedo elegir los componentes de mi PC personalizada?"
            answer="¡Por supuesto! Trabajamos contigo para seleccionar cada componente según tus necesidades y presupuesto. Nuestros expertos te guiarán en la selección, asegurando la compatibilidad y el mejor rendimiento posible."
          />
          <FAQItem 
            question="¿Realizan envíos de PCs pre-ensamblados?"
            answer="Sí, realizamos envíos a todo el país con embalaje especializado para proteger tu equipo. Trabajamos con empresas de logística confiables y aseguramos cada envío para garantizar que tu PC llegue en perfectas condiciones."
          />
          <FAQItem 
            question="¿Qué tipo de asesoría ofrecen?"
            answer="Ofrecemos asesoría completa en la selección de componentes, optimización de rendimiento, solución de problemas, y recomendaciones de actualización. Nuestro equipo técnico está disponible para responder todas tus dudas antes, durante y después de la compra."
          />
        </div>
      </div>
    </div>
  </section>
);