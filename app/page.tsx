'use client';

import { FormEvent } from "react";

export default function HomePage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("¡Mensaje enviado! Nos pondremos en contacto pronto.");
  };

  return (
    <>
      <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')]">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Encuentra la propiedad de tus sueños
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Con EstatePro, descubre propiedades increíbles a un clic de distancia.
          </p>
          <a href="#contacto" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700">
            Contáctanos
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Propiedades Destacadas</h2>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
          {[1,2,3].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={`https://source.unsplash.com/random/800x60${i}`} alt={`Propiedad ${i+1}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Propiedad {i+1}</h3>
                <p className="text-gray-700 mb-4">3 habitaciones · 2 baños · 120m²</p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {["Juan Pérez", "María García"].map((nombre, i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6 shadow">
              <p className="text-gray-800 italic mb-4">"Excelente experiencia con EstatePro."</p>
              <p className="text-gray-800 font-semibold">- {nombre}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 mb-1">Nombre:</label>
            <input type="text" id="nombre" required className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email:</label>
            <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-gray-700 mb-1">Mensaje:</label>
            <textarea id="mensaje" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700">
            Enviar Mensaje
          </button>
        </form>
      </section>
    </>
  );
}
