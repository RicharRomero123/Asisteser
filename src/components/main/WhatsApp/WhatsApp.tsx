"use client";

import React, { useState, useEffect, MouseEvent } from 'react';
import Lottie from 'lottie-react';
import whatsapp from './whatsapp.json';

const WhatsAppFloatIcon = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragged, setDragged] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newX = window.innerWidth - 200; // Adjusted for larger size and more left position
      const newY = window.innerHeight - 160; // Adjusted for larger size and position
      setPosition({ x: newX, y: newY });

      const updatePosition = () => {
        const updatedX = window.innerWidth - 200; // Adjusted for larger size and more left position
        const updatedY = window.innerHeight - 160; // Adjusted for larger size and position
        setPosition({ x: updatedX, y: updatedY });
      };

      window.addEventListener('resize', updatePosition);

      return () => {
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, []);

  
  const handleClick = (e: MouseEvent) => {
    if (dragged) {
      e.preventDefault();
      setDragged(false);
    }
  };

  return (
    <a
      href={`https://wa.link/s79nyd`}
      onClick={handleClick}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 50,
        cursor: isDragging ? 'grabbing' : 'pointer',
      }}
      className="flex items-center justify-center w-60 h-60 rounded-full shadow-lg transition-colors duration-200 ease-in-out"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp!"
    >
      <Lottie animationData={whatsapp} loop autoplay style={{ width: '100%', height: '100%' }} />
    </a>
  );
};

export default WhatsAppFloatIcon;
