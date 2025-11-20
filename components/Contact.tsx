'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [logoError, setLogoError] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    setFormMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      // Aqui você pode integrar com um serviço de email ou API
      // Por enquanto, vamos usar mailto como fallback
      const mailtoLink = `mailto:fideliscota@gmail.com?subject=${encodeURIComponent(data.subject as string)}&body=${encodeURIComponent(
        `Nome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}\n\nMensagem:\n${data.message}`
      )}`
      
      // Abre o cliente de email padrão
      window.location.href = mailtoLink
      
      setFormStatus('success')
      setFormMessage('Redirecionando para seu cliente de email...')
      
      // Limpa o formulário após 2 segundos
      setTimeout(() => {
        e.currentTarget.reset()
        setFormStatus('idle')
        setFormMessage('')
      }, 2000)
    } catch (error) {
      setFormStatus('error')
      setFormMessage('Erro ao enviar mensagem. Por favor, tente novamente.')
    }
  }
  
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Fale conosco
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-neutral max-w-2xl mx-auto">
            Entre em contato conosco para uma consultoria jurídica especializada
          </p>
        </div>

        {/* Localização */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 text-center">
            Localização
          </h3>
          <div className="bg-beige rounded-lg p-8 mb-6">
            <div className="flex items-start space-x-4 mb-4">
              <FaMapMarkerAlt className="text-primary text-2xl mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary text-base md:text-lg mb-2">Nosso escritório</p>
                <p className="text-gray-neutral text-sm md:text-base">
                  Rua Aerolito 34, Caiçara-Adelaide<br />
                  Belo Horizonte - MG<br />
                  CEP 30750180
                </p>
              </div>
            </div>
          </div>
          <div className="bg-beige rounded-lg h-64 md:h-96 border-2 border-primary/20 overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Rua+Aerolito+34,+Caiçara-Adelaide,+Belo+Horizonte+-+MG,+30750-180&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do escritório Fidelis & Cota - Rua Aerolito 34, Caiçara-Adelaide, Belo Horizonte - MG"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 flex flex-col">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-primary text-base md:text-lg">E-mail</p>
                    <a
                      href="mailto:fideliscota@gmail.com"
                      className="text-primary hover:text-primary-700 text-sm md:text-base"
                    >
                      fideliscota@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Telefones</p>
                    <p className="text-gray-neutral text-sm md:text-base">(31) 99104-7474 / (31) 99544-1317</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Endereço</p>
                    <p className="text-gray-neutral text-sm md:text-base">
                      Rua Aerolito 34, Caiçara-Adelaide<br />
                      Belo Horizonte - MG, CEP 30750180<br />
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaClock className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Atendimento</p>
                    <p className="text-gray-neutral text-sm md:text-base">
                      De segunda à sexta-feira em dias úteis,
                      das 9h00 às 18h00.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Mídias sociais
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://wa.me/5531991047474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>

            {/* Logo */}
            {!logoError && (
              <div className="mt-8 flex-1 flex items-end">
                <div className="relative w-full">
                  <Image
                    src="/logo2.png"
                    alt="Fidelis & Cota Logo"
                    width={800}
                    height={300}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '300px' }}
                    onError={() => setLogoError(true)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
              Entre em contato
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium text-primary mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium text-primary mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm md:text-base font-medium text-primary mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm md:text-base font-medium text-primary mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium text-primary mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-primary hover:bg-primary-700 disabled:bg-primary/50 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg transition-colors font-medium text-base md:text-lg"
              >
                {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              
              {formMessage && (
                <div
                  className={`mt-4 p-4 rounded-lg text-sm md:text-base ${
                    formStatus === 'success'
                      ? 'bg-green-100 text-green-800'
                      : formStatus === 'error'
                      ? 'bg-red-100 text-red-800'
                      : ''
                  }`}
                >
                  {formMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

