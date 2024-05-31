"use client"
import React, { useState, useEffect, MouseEvent } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppFloatIconProps {
  phoneNumber: string;
}

const WhatsAppFloatIcon: React.FC<WhatsAppFloatIconProps> = ({ phoneNumber }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
  const [dragged, setDragged] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      const newX = window.innerWidth - 100;
      const newY = window.innerHeight - 100;
      setPosition({ x: newX, y: newY });
    };

    window.addEventListener('resize', updatePosition); // Ajustar en caso de cambio de tamaño

    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  
  const handleClick = (e: MouseEvent) => {
    if (dragged) {
      e.preventDefault(); // Prevenir acción si se ha arrastrado
      setDragged(false); // Resetear estado para el próximo clic
    }
  };

  return (
    <a
      href={`https://wa.link/895m09`}
      onClick={handleClick}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 50,
        cursor: isDragging ? 'grabbing' : 'pointer',
      }}
      className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 ease-in-out"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp!"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
};

export default WhatsAppFloatIcon;
