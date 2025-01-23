import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { FeaturedProductsSection } from "./components/FeaturedProductsSection";
import { BrandsSection } from "./components/BrandsSection";
import { AboutUsSection } from "./components/AboutUsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { LeadPopup } from "./components/LeadPopup";
import { ChatbotWidget } from "./components/ChatbotWidget";

import streamingStation from './assets/streaming-station.webp';
import ensambleImg from './assets/Ensamble.jpg';
import prebuiltImg from './assets/pre-built.png';
import asesoriaImg from './assets/Asesoria.jpg';
import aboutUsImage from './assets/about-us.webp';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <main className="pt-24">
        {/* Hero Section */}
        <Hero streamingStation={streamingStation} />

        {/* Services Section */}
        <ServicesSection 
          title="Nuestros Servicios"
          description="Ofrecemos soluciones integrales para satisfacer todas tus necesidades tecnológicas.
            Desde el ensamblaje personalizado hasta el soporte técnico continuo."
          ensambleImg={ensambleImg}
          prebuiltImg={prebuiltImg}
          asesoriaImg={asesoriaImg}
          services={[
            {
              title: "Ensamblaje Personalizado",
              description: "Construimos tu PC ideal según tus necesidades específicas y presupuesto.",
              image: ensambleImg,
              serviceType: "ensamble"
            },
            {
              title: "PCs Pre-Armadas",
              description: "Equipos listos para usar, optimizados para diferentes casos de uso.",
              image: prebuiltImg,
              serviceType: "pre-ensamblada"
            },
            {
              title: "Asesoría Técnica",
              description: "Te guiamos en la selección de componentes y resolución de dudas.",
              image: asesoriaImg,
              serviceType: "asesoria"
            }
          ]}
        />

        {/* Featured Products Section */}
        <FeaturedProductsSection />

        {/* Brands Section */}
        <BrandsSection />

        {/* About Us Section */}
        <AboutUsSection 
          title="Sobre Nosotros"
          description={[
            "En Elite Tech, somos apasionados por la tecnología y expertos en crear experiencias gaming excepcionales. Con años de experiencia en el mercado, nos hemos convertido en líderes en el ensamblaje de PCs personalizadas y soluciones gaming de alto rendimiento.",
            "Nuestro equipo está formado por entusiastas del gaming y profesionales técnicos que entienden tus necesidades y te ayudan a conseguir el mejor rendimiento para tu inversión."
          ]}
          image={aboutUsImage}
        />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
      <LeadPopup />
      <ChatbotWidget />
    </div>
  );
}

export default App;