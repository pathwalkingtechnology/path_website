import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Para las animaciones suaves

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar la apertura/cierre del chatbot
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón flotante para abrir el chatbot */}
      <div 
        className="fixed bottom-5 right-5 bg-primary p-4 rounded-full shadow-lg cursor-pointer hover:bg-secondary transition duration-300"
        onClick={toggleChatbot}
      >
        💬 {/* Este es el ícono del chatbot, puedes cambiarlo por una imagen */}
      </div>

      {/* Ventana flotante del chatbot */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-16 right-5 bg-white w-80 h-96 p-4 rounded-lg shadow-xl z-50"
        >
          {/* Cabecera del chatbot */}
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-bold text-primary">Chatbot</h3>
            <button onClick={toggleChatbot} className="text-secondary font-bold">✕</button>
          </div>

          {/* Contenido del chatbot */}
          <div className="mt-4">
            <p>¡Hola! ¿En qué puedo ayudarte?</p>
            {/* Aquí puedes integrar una simple caja de texto para el chat o un iframe con un servicio de chatbot AI */}
          </div>
        </motion.div>
      )}
    </div>
  );
}
