import React, { useState } from 'react';
import { Phone, Mail, MapPin, Hammer, Wrench, Cog, Menu, X } from 'lucide-react';
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Link } from 'react-router-dom';
import perfil from './images/Logo.jpeg';
import perfilPersonal from './images/perfil.jpeg';
import muebleSwitch from './images/mueble_switch.jpg';
import cocinaIndustrial from './images/cocina_industrial.jpg';
import freidoraIndustrial from './images/freidora_industrial.jpg';
import carritoPollo from './images/carrito_pollo.jpg';
import carritoSalchipapas from './images/carrito_salchipapas.jpg';
import estructuraEscenario from './images/estructura_escenario.jpg';

// Añadir scroll suave en toda la página
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <main className="flex-1">
        <HeroSection openModal={openModal} />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      {isModalOpen && <AboutModal closeModal={closeModal} />}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center space-x-2 md:space-x-4 text-black font-semibold">
          <img
            src={perfil}
            alt="Rodolfo Rocha Rossel"
            className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover border-2 border-gray-300"
          />
          <span className="font-bold text-lg md:text-xl tracking-wider">
            Inox Rossel
          </span>
        </a>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="hidden md:flex gap-4 md:gap-8 items-center">
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#portafolio">Portafolio</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
          <NavLink href="/" className="text-red-600 font-bold">Salir</NavLink>
        </nav>
      </div>
      {/* Menú deslizable para móviles */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        onClick={toggleMenu}
      >
        <div
          className="absolute right-0 top-0 h-full w-3/4 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="mt-8 flex flex-col gap-6">
            <NavLink href="#servicios" onClick={toggleMenu}>Servicios</NavLink>
            <NavLink href="#portafolio" onClick={toggleMenu}>Portafolio</NavLink>
            <NavLink href="#contacto" onClick={toggleMenu}>Contacto</NavLink>
            <NavLink href="/" onClick={toggleMenu} className="text-red-600 font-bold">Salir</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children, onClick, className }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200 ease-in-out tracking-wider ${className}`}
    >
      {children}
    </a>
  );
}

function HeroSection({ openModal }) {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-center text-white animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Excelencia en Metal Mecánica y Creaciones en Madera
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-400 leading-relaxed md:text-xl">
          Más de 20 años perfeccionando el arte de transformar metal y madera en piezas únicas y funcionales. Aquí, cada proyecto es una obra de precisión, calidad y pasión artesanal.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            className="bg-white text-black hover:bg-gray-200 shadow-lg px-6 py-3 text-lg font-medium transform transition-transform duration-200 hover:scale-105"
            onClick={openModal}
          >
            Descripción Personal
          </Button>
          <Link to="/projects">
            <Button
              className="bg-yellow-400 text-white hover:bg-yellow-500 shadow-lg px-6 py-3 text-lg font-medium transform transition-transform duration-200 hover:scale-105"
            >
              Ver Proyectos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


function AboutModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-lg mx-auto shadow-lg relative animate-fade-in-up">
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          &times;
        </button>
        <img
          src={perfilPersonal}
          alt="PerfilPersonal"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-300"
        />
        <h2 className="text-2xl font-bold text-center mb-4">Jimmy Rodolfo Rocha Ross el</h2>
        <p className="text-gray-700 text-center mb-4">
          Con más de 20 años de experiencia en metal mecánica y trabajos en madera, me especializo en crear soluciones personalizadas y de alta calidad.
        </p>
        <p className="text-gray-700 text-center mb-4">
          Cada proyecto refleja precisión, creatividad y resistencia, diseñado para satisfacer las necesidades y aspiraciones de cada cliente.
        </p>
        <p className="text-gray-700 text-center">
          Además de trabajos en metal y madera, ofrezco experiencia en cualquier otro proyecto que se desee realizar. Mi compromiso es brindar resultados únicos, funcionales y visualmente impresionantes.
        </p>
        <div className="text-center mt-6">
          <Button onClick={closeModal} className="bg-black text-white px-4 py-2 rounded-full">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}


function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-16 bg-gray-100 text-black animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Wrench />}
            title="Metal Mecánica Especializada"
            description="Fabricación de estructuras metálicas de alta resistencia, desde hornos industriales hasta asadores personalizados. Cada proyecto es diseñado con precisión y robustez."
          />
          <ServiceCard
            icon={<Hammer />}
            title="Muebles y Creaciones en Madera"
            description="Diseño y construcción de muebles únicos en madera de alta calidad, adaptados a cualquier espacio y necesidad, combinando funcionalidad y un estilo impecable."
          />
          <ServiceCard
            icon={<Cog />}
            title="Soldadura y Ensamblaje de Estructuras"
            description="Soluciones de soldadura especializada para proyectos personalizados, incluyendo ensamblaje de estructuras complejas que requieren durabilidad y precisión."
          />
          <ServiceCard
            icon={<MapPin />}
            title="Construcción de Asadores y Hornos"
            description="Desarrollo de asadores y hornos a medida, diseñados para resistir altas temperaturas y optimizar el espacio. Perfectos para exteriores y proyectos especiales."
          />
          <ServiceCard
            icon={<Phone />}
            title="Consultoría y Proyectos a Medida"
            description="Ofrecemos asesoría personalizada para transformar tus ideas en proyectos reales, con soluciones adaptadas a tus necesidades de diseño y funcionalidad."
          />
          <ServiceCard
            icon={<Wrench />}
            title="Diseño de Espacios Exteriores"
            description="Creación de estructuras y mobiliario adaptados para jardines y exteriores, fusionando durabilidad y estética en espacios al aire libre."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg border border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up">
      <div className="h-12 w-12 mb-4 text-black">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PortfolioSection() {
  const projects = [
    { 
      title: "Mueble Switch Mario", 
      description: "Este mueble único, inspirado en la consola Nintendo Switch, es ideal para los fanáticos de Mario y los videojuegos. Diseñado con atención a cada detalle, cuenta con compartimientos y un área especial para almacenamiento, todo en un estilo que imita los controles de la consola.", 
      image: muebleSwitch 
    },
    { 
      title: "Cocina Industrial a Gas", 
      description: "Esta cocina industrial de acero inoxidable es perfecta para establecimientos de alto volumen. Con cuatro hornillas potentes, ofrece durabilidad y eficiencia en la cocción, garantizando un rendimiento óptimo para negocios que requieren equipo resistente y funcional.", 
      image: cocinaIndustrial 
    },
    { 
      title: "Freidora Industrial de Acero", 
      description: "Freidora robusta y eficiente, diseñada para restaurantes y negocios de comida rápida. Construida en acero inoxidable para resistencia y fácil limpieza, y equipada con compartimentos separados para diferentes tipos de frituras, optimizando tiempos y manteniendo la calidad de cada producto.", 
      image: freidoraIndustrial 
    },
    { 
      title: "Carrito de Comida para Pollo Asado", 
      description: "Este carrito está diseñado específicamente para la venta de pollo asado. Con compartimentos adecuados para almacenar los ingredientes y un área de cocción segura, es una solución ideal para los negocios ambulantes que buscan funcionalidad y estilo en sus herramientas de trabajo.", 
      image: carritoPollo 
    },
    { 
      title: "Carrito de Salchipapas y Hamburguesas", 
      description: "Un carrito especializado para la venta de salchipapas y hamburguesas, diseñado en acero inoxidable. Incluye espacios de almacenamiento y una plancha integrada, optimizando el espacio para la preparación y venta rápida de comidas.", 
      image: carritoSalchipapas 
    },
    { 
      title: "Estructura para Escenario de Eventos", 
      description: "Estructura de aluminio diseñada para montar escenarios en eventos y conciertos. Con una base resistente y soporte para luces y equipo de sonido, garantiza estabilidad y seguridad en presentaciones de gran escala, destacándose por su resistencia y adaptabilidad.", 
      image: estructuraEscenario 
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portafolio" className="w-full py-16 bg-gray-100 text-black animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function ProjectCard({ title, description, image, onOpen }) {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-white h-64 shadow-md group border border-gray-200 transform transition-transform duration-300 hover:scale-105"
      onClick={onOpen}
      style={{
        boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)",
        borderRadius: "12px",
      }}
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <div className="text-left">
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-300">{description.slice(0, 60)}...</p>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
        className="bg-white rounded-lg p-6 max-w-lg md:max-w-2xl mx-auto shadow-lg relative overflow-auto"
        style={{
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.25)",
          borderRadius: "16px",
          maxHeight: "90vh", // Limita la altura del modal
        }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto max-h-64 object-contain rounded-md mb-4"
          style={{
            borderRadius: "10px",
            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
        <h3 className="text-2xl font-semibold text-center mb-2">{project.title}</h3>
        <p className="text-gray-600 text-center mb-4">{project.description}</p>
        <div className="text-center mt-6">
          <Button onClick={onClose} className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}


function ContactSection() {
  return (
    <section id="contacto" className="w-full py-16 bg-gray-100 text-black animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Solicitar Cotización</h2>
        <div className="flex flex-col md:flex-row gap-16 justify-between max-w-4xl mx-auto">
          <div className="space-y-6">
            <ContactInfo icon={<Mail />} text="info@metalmasterpro.com" />
            <ContactInfo icon={<MapPin />} text="123 Calle Principal, Ciudad" />
            <div className="flex items-center space-x-3 text-gray-600">
              <a
                href="https://wa.me/59170416434"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-500 hover:text-green-700 transition-colors duration-200"
              >
                <Phone className="text-green-500" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
          <form className="space-y-6 w-full md:w-1/2">
            <Input placeholder="Nombre" className="bg-gray-50 border border-gray-300 focus:border-gray-400 h-12" />
            <Input placeholder="Correo Electrónico" className="bg-gray-50 border border-gray-300 focus:border-gray-400 h-12" />
            <Input placeholder="Número de Celular" className="bg-gray-50 border border-gray-300 focus:border-gray-400 h-12" />
            <textarea 
              className="w-full p-4 bg-gray-50 border border-gray-300 focus:border-gray-400 rounded-lg text-black placeholder-gray-500 focus:outline-none h-32" 
              placeholder="Describe el proyecto o servicio que necesitas"
            />
            <label className="text-gray-600 block">
              Adjunta una foto de referencia (opcional)
              <input type="file" accept="image/*" className="block mt-2 text-gray-600" />
            </label>
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12 font-semibold transform transition-transform duration-200 hover:scale-105">
              Enviar Consulta
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}


function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center space-x-3 text-gray-600">
      <div className="text-black">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full py-8 bg-white text-gray-600 border-t border-gray-300 animate-fade-in">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <Wrench className="h-6 w-6 text-black" />
          <span className="font-bold text-lg">Inox Rossel</span>
        </a>
        <p className="mt-4 md:mt-0 text-gray-500">© 2024 Inox Rossel. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
