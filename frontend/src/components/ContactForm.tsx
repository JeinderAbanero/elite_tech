import React, { useState } from 'react';
import { MessageCircle, User, Mail, Laptop, MessageSquare, Send, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  service: string;
  budget: number;
  description: string;
}

interface FormErrors {
  [key: string]: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    budget: 1000,
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.service) {
      newErrors.service = 'Seleccione un servicio';
    } else if (!['ensamble-personalizado', 'pc-preensamblada', 'asesoria-tecnica'].includes(formData.service)) {
      newErrors.service = 'Servicio no válido';
    }
    if (!formData.budget || formData.budget < 500 || formData.budget > 5000) {
      newErrors.budget = 'El presupuesto debe estar entre $500 y $5000';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'La descripción debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://elite-tech-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al enviar el formulario');
      }
      
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: 1000,
        description: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="bg-[#F5F6F6] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#272B2C]">¡Hagamos realidad tu proyecto!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y nuestro equipo de expertos te ayudará a crear la computadora perfecta para ti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Columna Izquierda - Información */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#272B2C]">¿Por qué elegirnos?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-600">
                    <Laptop size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#272B2C]">Experiencia Comprobada</h4>
                    <p className="text-gray-600 text-sm">Más de 5 años ensamblando PCs de alta gama</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-600">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#272B2C]">Asesoría Personalizada</h4>
                    <p className="text-gray-600 text-sm">Te guiamos en cada paso del proceso</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-600">
                    <Laptop size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#272B2C]">Componentes Premium</h4>
                    <p className="text-gray-600 text-sm">Solo trabajamos con las mejores marcas</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3"
              alt="Setup Gaming"
              className="rounded-xl shadow-lg w-full object-cover h-[300px]"
            />
          </div>

          {/* Columna Derecha - Formulario */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <User className="text-yellow-600" size={20} />
                  <label className="text-sm font-medium text-gray-700">Nombre completo</label>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border text-gray-900 border-gray-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="text-yellow-600" size={20} />
                  <label className="text-sm font-medium text-gray-700">Correo electrónico</label>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border text-gray-900 border-gray-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Laptop className="text-yellow-600" size={20} />
                  <label className="text-sm font-medium text-gray-700">Tipo de servicio</label>
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border text-gray-900 border-gray-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                >
                  <option value="">Tipo de servicio</option>
                  <option value="ensamble-personalizado" className="text-[#272B2C]">Ensamble Personalizado</option>
                  <option value="pc-preensamblada" className="text-[#272B2C]">Venta de PC Pre-ensambladas</option>
                  <option value="asesoria-tecnica" className="text-[#272B2C]">Asesoría Técnica</option>
                </select>
                {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="text-yellow-600" size={20} />
                  <label className="text-sm font-medium text-gray-700">Presupuesto estimado</label>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: Number(e.target.value) }))}
                  className="w-full"
                />
                <div className="text-center text-sm text-gray-600 mt-2">
                  {new Intl.NumberFormat('es-VE', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                  }).format(formData.budget)}
                </div>
                {errors.budget && <p className="mt-1 text-sm text-red-500">{errors.budget}</p>}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="text-yellow-600" size={20} />
                  <label className="text-sm font-medium text-gray-700">¿En qué podemos ayudarte?</label>
                </div>
                <textarea
                  name="description"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border text-gray-900 border-gray-200 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                />
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin mx-auto" />
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    Enviar mensaje
                  </span>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 text-green-600 p-4 rounded-lg text-center">
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 text-red-600 p-4 rounded-lg text-center">
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};