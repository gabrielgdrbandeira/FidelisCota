'use client'

import { useState } from 'react'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const id = href.substring(1)
      const element = document.getElementById(id)
      if (element) {
        const header = document.querySelector('header')
        const headerHeight = header ? header.offsetHeight : 120
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementTop - headerHeight - 20
        
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'instant'
        })
        // Atualiza a URL sem recarregar
        window.history.pushState(null, '', href)
      }
      setIsMenuOpen(false)
    } else if (href === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'instant' })
      window.history.pushState(null, '', '/')
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Nossos serviços', href: '#areas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-4 group"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <Image
                src="/logo.png"
                alt="Fidelis & Cota Logo"
                fill
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
            </div>
            <div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary group-hover:text-primary-700 transition-colors">
                Fidelis & Cota
              </div>
              <div className="text-xs md:text-sm text-gray-neutral font-light">
                Advocacia e Consultoria
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-primary hover:text-primary-700 transition-colors text-base md:text-lg font-medium relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-primary focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-3 text-base md:text-lg text-primary hover:text-primary-700 transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/5531991047474"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg mt-4 w-fit"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
