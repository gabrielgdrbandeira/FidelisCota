'use client'

import Link from 'next/link'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Footer() {
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
    } else if (href === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'instant' })
      window.history.pushState(null, '', '/')
    }
  }

  const footerLinks = {
    principal: [
      { name: 'Home', href: '/' },
      { name: 'Nossos serviços', href: '#areas' },
      { name: 'Sobre', href: '#sobre' },
      { name: 'Contato', href: '#contato' },
    ],
    areas: [
      { name: 'Direito de Família', href: '#areas' },
      { name: 'Direito Trabalhista', href: '#areas' },
    ],
    legal: [
      { name: 'Política de Privacidade', href: '/politica-privacidade' },
      { name: 'Termo de Uso', href: '/termo-uso' },
      { name: 'Política de Qualidade', href: '/politica-qualidade' },
      { name: 'Fale Conosco', href: '#contato' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Fidelis & Cota
            </h3>
            <p className="text-sm md:text-base mb-4">
              Advocacia e Consultoria
            </p>
            <a
              href="https://wa.me/5531991047474"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              <FaWhatsapp />
              <span>Chame no WhatsApp</span>
            </a>
          </div>

          {/* Principal Links */}
          <div>
            <h4 className="text-white font-semibold text-base md:text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm md:text-base">
              {footerLinks.principal.map((link) => (
                <li key={link.name}>
                  {link.href === '/' || link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold text-base md:text-lg mb-4">Áreas de atuação</h4>
            <ul className="space-y-2 text-sm md:text-base">
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold text-base md:text-lg mb-4">Mídias sociais</h4>
            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://wa.me/5531991047474"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm md:text-base">
          <p>
            © Fidelis & Cota Advocacia e Consultoria {new Date().getFullYear()} - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
