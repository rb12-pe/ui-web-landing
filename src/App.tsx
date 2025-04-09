import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Lightbulb, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Desarrollo Web/Móvil',
    description: 'Aplicaciones modernas y escalables con las últimas tecnologías',
  },
  {
    icon: <MonitorSmartphone className="w-12 h-12" />,
    title: 'Consultoría TI',
    description: 'Asesoramiento experto para optimizar tus procesos tecnológicos',
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: 'Soluciones TI',
    description: 'Implementación de sistemas personalizados para tu negocio',
  },
];

const testimonials = [
  {
    quote: "RB12 redujo nuestros costos en un 30%",
    author: "María González",
    company: "Tech Solutions Inc."
  },
  {
    quote: "Transformaron completamente nuestra infraestructura digital",
    author: "Carlos Ruiz",
    company: "Innovate Corp"
  },
  {
    quote: "El mejor equipo de desarrollo con el que hemos trabajado",
    author: "Ana Martínez",
    company: "Digital Systems"
  },
];

const techImages = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1920&q=80',
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.png" alt="RB12 Services" className="h-10" />
            </div>
            <div className="hidden md:flex items-center space-x-8 text-white">
              <a href="#services" className="hover:text-gray-300">Servicios</a>
              <a href="#about" className="hover:text-gray-300">Nosotros</a>
              <a href="#contact" className="hover:text-gray-300">Contacto</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Tecnología que Impulsa tu Negocio
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Desarrollo de Software a Medida & Consultoría TI Estratégica
            </motion.p>
            <motion.button 
              className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium flex items-center mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicita una Consulta Gratis
              <ChevronRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {techImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 6,
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  delay: index * 6,
                }}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ¿Sistemas obsoletos? ¿Falta de innovación?<br />
            <span className="text-secondary">Nosotros lo resolvemos</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-secondary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <p className="text-lg mb-4 text-gray-700">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-secondary">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Código Limpio + Estrategia = Resultados Predecibles
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transformamos tu visión en soluciones tecnológicas escalables y eficientes
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-8 text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Contáctanos
            </motion.h2>
            <motion.form 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-opacity-90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar mensaje
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              {/* <img src="/favicon.svg" alt="RB12 Services" className="h-8 mr-3" /> */}
              <span className="text-xl font-semibold">RB12 Services</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300"><Github /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © RB12 Services 2025. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;