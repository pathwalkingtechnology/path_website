import React, { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: 'Hola! Soy Path, tu asistente virtual. ¿En qué puedo ayudarte?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Agrega el mensaje del usuario
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);

    // Respuesta del bot
    setTimeout(() => {
      let botResponse = '';
      if (input.toLowerCase().includes('hola')) {
        botResponse = '¡Hola! ¿Te gustaría dejarnos tu correo o teléfono para que nos contactemos contigo?';
      } else if (input.toLowerCase().includes('gracias')) {
        botResponse = '¡De nada! Estamos aquí para ayudarte.';
      } else {
        botResponse = 'Por ahora solo puedo responder consultas sobre contacto. Puedes dejar tu correo o móvil para que nos comuniquemos contigo.';
      }

      setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    }, 1000);

    // Limpia el input después de enviar el mensaje
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 w-80">
      <div className="h-64 overflow-y-auto p-2">
        {messages.map((message, index) => (
          <div key={index} className={`my-2 ${message.sender === 'bot' ? 'text-left' : 'text-right'}`}>
            <span
              className={`inline-block p-2 rounded-lg ${
                message.sender === 'bot' ? 'bg-primary text-white' : 'bg-secondary text-white'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full border rounded-l-lg p-2 focus:outline-none"
          placeholder="Escribe tu mensaje..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-primary text-white rounded-r-lg px-4 py-2 hover:bg-secondary transition duration-300"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
