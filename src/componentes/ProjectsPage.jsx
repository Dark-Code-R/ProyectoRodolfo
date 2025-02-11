import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import perfil from './images/perfil.jpeg';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-black">
      <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white shadow-md animate-fade-in">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={perfil} alt="Rodolfo Rocha Rossel" className="h-10 w-10 rounded-full border-2 border-gray-300 object-cover" />
            <h1 className="text-2xl font-bold">Taller R&R - Proyectos Realizados</h1>
          </div>
          <Link to="/home">
            <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300">
              Atrás
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-8">
        <section className="text-center my-8 px-6">
          <h2 className="text-3xl font-bold mb-4">Nuestros Proyectos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada proyecto es un reflejo de nuestra pasión por la artesanía y el diseño personalizado. Desde estructuras metálicas hasta mobiliario en madera, nuestros proyectos están hechos a la medida para cumplir con los más altos estándares de calidad.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Asador a Medida" 
            description="Asador hecho a la medida para espacios reducidos y funcionalidad óptima." 
            imageUrl="/images/asador.jpg" 
            fullDescription="Este asador está diseñado para quienes valoran la calidad y el ahorro de espacio, con detalles que garantizan un uso prolongado y eficiente."
          />
          <ProjectCard 
            title="Mobiliario en Madera" 
            description="Muebles personalizados para hogar y oficina, diseñados en madera de alta calidad." 
            imageUrl="/images/mobiliario.jpg" 
            fullDescription="Cada pieza es única, hecha a mano con madera de alta calidad, adaptada para complementar cualquier espacio."
          />
          <ProjectCard 
            title="Sistema de Seguridad" 
            description="Instalación de sistemas avanzados de seguridad para viviendas y negocios." 
            imageUrl="/images/seguridad.jpg" 
            fullDescription="Proyectos de seguridad robustos y confiables para proteger tus espacios, personalizables según tus necesidades."
          />
        </section>

        <div className="text-center mt-12">
          <Link to="/contacto">
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800">
              ¿Tienes un Proyecto en Mente? Contáctanos
            </button>
          </Link>
        </div>
      </main>

      <footer className="w-full py-8 bg-gray-200 text-center text-gray-600 mt-12">
        <p>Gracias por explorar nuestros proyectos realizados. Si deseas conocer más o iniciar tu propio proyecto, no dudes en contactarnos.</p>
        <a
          href="https://wa.me/59170416434"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-800 font-bold mt-4 block"
        >
          Contactar por WhatsApp
        </a>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, imageUrl, fullDescription }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:opacity-90" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} title={title} description={fullDescription} imageUrl={imageUrl} />
      )}
    </>
  );
}

function Modal({ onClose, title, description, imageUrl }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-lg mx-auto shadow-lg relative animate-fade-in-up overflow-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={imageUrl} alt={title} className="w-full h-auto max-h-64 object-contain rounded-md mb-4" />
        <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
}
