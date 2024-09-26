'use client';  // Esto marca el componente como Client Component
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón del chatbot */}
      <motion.button
        className="bg-primary p-3 rounded-full shadow-lg text-white"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Chat
      </motion.button>

      {/* Ventana flotante del chatbot */}
      {isOpen && (
        <motion.div
          className="bg-white rounded-lg shadow-lg p-4 w-72 mt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-2 text-primary">¡Hola!</h3>
          <p className="mb-4">¿Cómo podemos ayudarte hoy?</p>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => alert('Te contactaremos pronto!')}
                className="text-blue-500 hover:underline"
              >
                Quiero dejar mi email.
              </button>
            </li>
            <li className="mb-2">
              <a
                href="https://wa.me/5493764617711"
                target="_blank"
                className="text-green-500 hover:underline"
              >
                Chatear por WhatsApp
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/contacto"
                className="text-blue-500 hover:underline"
              >
                Ir al formulario de contacto
              </a>
            </li>
          </ul>
          {/* Botón para cerrar */}
          <button
            onClick={toggleChat}
            className="text-red-500 text-sm mt-4 hover:underline"
          >
            Cerrar
          </button>
        </motion.div>
      )}
    </div>
  );
}
