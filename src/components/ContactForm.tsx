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

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.service) {
      newErrors.service = 'Seleccione un servicio';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulamos el envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: 1000,
        description: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputWrapper = ({ children, error }: { children: React.ReactNode; error?: string }) => (
    <div className="relative">
      {children}
      {error && (
        <p className="absolute -bottom-6 left-0 text-red-500 text-xs">
          {error}
        </p>
      )}
    </div>
  );

  const formatBudget = (value: number) => {
    return new Intl.NumberFormat('es-VE', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
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
            <form onSubmit={handleSubmit} className="space-y-8">
              <InputWrapper error={errors.name}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500`}
                  />
                </div>
              </InputWrapper>

              <InputWrapper error={errors.email}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500`}
                  />
                </div>
              </InputWrapper>

              <div className="space-y-2">
                <InputWrapper error={errors.service}>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-[#272B2C] ${
                      errors.service ? 'border-red-500' : 'border-gray-200'
                    } focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500`}
                  >
                    <option value="" className="text-gray-500">Tipo de servicio</option>
                    <option value="ensamble" className="text-[#272B2C]">Ensamble Personalizado</option>
                    <option value="pre-ensamblada" className="text-[#272B2C]">PC Pre-ensamblada</option>
                    <option value="streaming" className="text-[#272B2C]">Estación de Streaming</option>
                    <option value="workstation" className="text-[#272B2C]">Workstation Profesional</option>
                    <option value="asesoria" className="text-[#272B2C]">Asesoría Técnica</option>
                  </select>
                </InputWrapper>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Presupuesto estimado: {formatBudget(formData.budget)}
                </label>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$500</span>
                  <span>$5,000</span>
                </div>
              </div>

              <InputWrapper error={errors.description}>
                <textarea
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                    errors.description ? 'border-red-500' : 'border-gray-200'
                  } focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500`}
                ></textarea>
              </InputWrapper>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-yellow-500 text-black px-6 py-3 rounded-lg flex items-center justify-center gap-2 
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-yellow-600'} 
                  transition-colors duration-200`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Solicitud
                  </>
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