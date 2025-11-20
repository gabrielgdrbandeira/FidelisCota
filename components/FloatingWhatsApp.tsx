'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://wa.me/5531991047474"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      {isHovered && (
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm">
          Fale conosco no WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      )}
    </a>
  )
}

