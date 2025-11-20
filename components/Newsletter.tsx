'use client'

import { useState } from 'react'
import { FaEnvelope, FaArrowRight } from 'react-icons/fa'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o email
    console.log('Email cadastrado:', email)
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="newsletter" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Assine nossa Newsletter
          </h2>
          <p className="text-white/90 mb-10 text-xl md:text-2xl">
            Fique por dentro das mais recentes inovações do meio jurídico brasileiro.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full pl-12 pr-4 py-5 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 text-xl"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white text-primary px-10 py-5 rounded-lg font-semibold hover:bg-beige transition-all whitespace-nowrap flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xl"
            >
              <span>Assinar</span>
              <FaArrowRight />
            </button>
          </form>
          {submitted && (
            <div className="mt-6 bg-green-500/20 border border-green-400 text-green-300 px-6 py-3 rounded-lg inline-block">
              ✓ Obrigado por se cadastrar! Verifique seu e-mail.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

