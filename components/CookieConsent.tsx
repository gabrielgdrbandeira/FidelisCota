'use client'

import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    functional: true,
    preferences: false,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ ...preferences, accepted: true }))
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ functional: true, accepted: false }))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-2xl z-50">
      <div className="container mx-auto max-w-4xl">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Gerenciar consentimento de cookies</h3>
              <p className="text-sm text-gray-300">
                Para fornecer as melhores experiências, usamos tecnologias como cookies para armazenar e/ou acessar informações do dispositivo. O consentimento com essas tecnologias nos permitirá processar dados como comportamento de navegação ou IDs exclusivos neste site.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
              >
                Ver preferências
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
              >
                Negar
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-sm transition-colors font-medium"
              >
                Aceitar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Gerenciar opções</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-4 mb-4">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <div>
                  <p className="font-semibold">Funcional</p>
                  <p className="text-xs text-gray-400">Sempre ativo</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  disabled
                  className="w-5 h-5"
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <div>
                  <p className="font-semibold">Preferências</p>
                  <p className="text-xs text-gray-400">Armazenamento de preferências</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.preferences}
                  onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                  className="w-5 h-5"
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <div>
                  <p className="font-semibold">Estatísticas</p>
                  <p className="text-xs text-gray-400">Fins estatísticos anônimos</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.statistics}
                  onChange={(e) => setPreferences({ ...preferences, statistics: e.target.checked })}
                  className="w-5 h-5"
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <div>
                  <p className="font-semibold">Marketing</p>
                  <p className="text-xs text-gray-400">Criar perfis de usuário para publicidade</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="w-5 h-5"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReject}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
              >
                Negar
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-sm transition-colors font-medium"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

