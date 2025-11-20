'use client'

import Image from 'next/image'
import { FaPhone, FaWhatsapp, FaArrowDown } from 'react-icons/fa'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)
  return (
    <section className="relative text-white py-32 md:py-40 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image de Belo Horizonte com fallback */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary">
          {!imageError && (
            <Image
              src="/bh/bh-hero.jpg"
              alt="Belo Horizonte"
              fill
              className="object-cover"
              priority
              quality={90}
              style={{ objectFit: 'cover' }}
              onError={() => setImageError(true)}
            />
          )}
        </div>
        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-primary/85"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-white/90 text-sm md:text-base font-medium tracking-wider uppercase">
              Bem-vindo ao
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Fidelis & Cota
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl font-light text-white">
              Advocacia e Consultoria
            </span>
          </h1>
          <p className="text-base md:text-lg text-white mb-12 max-w-3xl mx-auto font-light">
            Especializado em Direito de Família e Direito Trabalhista
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20">
              <FaPhone className="text-base" />
              <span className="text-sm md:text-base font-medium">(31) 99104-7474</span>
            </div>
            <a
              href="https://wa.me/5531991047474"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl transition-all font-semibold shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1 text-sm md:text-base"
            >
              <FaWhatsapp className="text-base" />
              <span>Chame no WhatsApp</span>
            </a>
          </div>
          <a
            href="#sobre"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('sobre')
              if (element) {
                const header = document.querySelector('header')
                const headerHeight = header ? header.offsetHeight : 120
                const elementTop = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementTop - headerHeight - 20
                window.scrollTo({
                  top: Math.max(0, offsetPosition),
                  behavior: 'instant'
                })
                window.history.pushState(null, '', '#sobre')
              }
            }}
            className="inline-flex items-center space-x-3 text-white/90 hover:text-white transition-colors text-sm md:text-base font-medium cursor-pointer"
          >
            <span>Quero conhecer mais</span>
            <FaArrowDown className="text-lg animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

