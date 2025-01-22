import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

interface FormData {
    email: string;
    userType: string;
    interests: string[];
}

export const LeadPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        userType: '',
        interests: []
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        // Verificar si ya se mostró antes
        const shown = localStorage.getItem('popupShown');
        if (shown) {
            setHasBeenShown(true);
            return;
        }

        // Mostrar después de 15 segundos
        const timeoutId = setTimeout(() => {
            if (!hasBeenShown) {
                setIsVisible(true);
                setHasBeenShown(true);
            }
        }, 15000);

        // Mostrar al hacer scroll del 25% de la página
        const handleScroll = () => {
            if (!hasBeenShown) {
                const scrolled = window.scrollY;
                const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
                if (scrolled > pageHeight * 0.25) {
                    setIsVisible(true);
                    setHasBeenShown(true);
                }
            }
        };

        // Mostrar cuando el mouse sale de la ventana
        const handleMouseLeave = (e: MouseEvent) => {
            if (!hasBeenShown && e.clientY <= 0) {
                setIsVisible(true);
                setHasBeenShown(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasBeenShown]);

    const handleInterestChange = (interest: string) => {
        const newInterests = formData.interests.includes(interest)
            ? formData.interests.filter(i => i !== interest)
            : [...formData.interests, interest];
        setFormData({ ...formData, interests: newInterests });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.userType) {
            alert('Por favor, selecciona tu perfil de usuario');
            return;
        }
        if (formData.interests.length === 0) {
            alert('Por favor, selecciona al menos un interés');
            return;
        }
        setIsSubmitting(true);

        try {
            const response = await fetch('https://elite-tech-backend.onrender.com/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al procesar la suscripción');
            }

            setSubmitStatus('success');
            localStorage.setItem('popupShown', 'true');
            
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative animate-fade-in-up">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={20} />
                </button>

                <div className="p-6">
                    <div className="text-center mb-6">
                        <Gift className="w-12 h-12 text-[#0B132B] mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-[#0B132B] mb-2">
                            ¡Ofertas Exclusivas!
                        </h2>
                        <p className="text-gray-800">
                            Recibe descuentos especiales y mantente al día con las últimas novedades en tecnología
                        </p>
                    </div>

                    {submitStatus === 'success' ? (
                        <div className="text-center text-green-600 p-4">
                            <p className="font-semibold">¡Gracias por suscribirte!</p>
                            <p className="text-sm">Recibirás nuestras ofertas especiales pronto.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-1">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0B132B] text-gray-800 placeholder-gray-500 bg-white"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-1">
                                    ¿Cuál es tu perfil?
                                </label>
                                <select
                                    required
                                    value={formData.userType}
                                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0B132B] text-gray-800 bg-white"
                                >
                                    <option value="">Selecciona tu perfil</option>
                                    <option value="Diseñador">Diseñador</option>
                                    <option value="Programador">Programador</option>
                                    <option value="Estudiante">Estudiante</option>
                                    <option value="Gamer">Gamer</option>
                                    <option value="Creador de Contenido">Creador de Contenido</option>
                                    <option value="Profesional">Profesional</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-1">
                                    ¿Qué te interesa?
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['PC Gaming', 'Workstation', 'Servicio Técnico', 'Asesoría'].map((interest) => (
                                        <button
                                            key={interest}
                                            type="button"
                                            onClick={() => handleInterestChange(interest)}
                                            className={`p-2 text-sm rounded-lg border ${
                                                formData.interests.includes(interest)
                                                    ? 'bg-yellow-500 text-white border-yellow-500'
                                                    : 'bg-white text-gray-800 border-gray-300 hover:border-yellow-500'
                                            }`}
                                        >
                                            {interest}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {submitStatus === 'error' && (
                                <p className="text-red-600 text-sm">
                                    Error al procesar la suscripción. Por favor, intenta de nuevo.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting || formData.interests.length === 0}
                                className={`w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 ${
                                    isSubmitting || formData.interests.length === 0
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-yellow-500 hover:bg-yellow-600'
                                } text-white transition-colors`}
                            >
                                <span>{isSubmitting ? 'Procesando...' : 'Recibir Ofertas Especiales'}</span>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
